import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLock, FiSave, FiDownload, FiUpload, FiRotateCcw, FiSearch, FiLogOut } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/hooks/useAuth";
import { fetchRepos, type GithubRepo } from "@/services/github";
import {
  loadCuration,
  saveCuration,
  resetCuration,
  exportCuration,
  importCuration,
  emptyCuration,
  type CurationMap,
  type RepoCuration,
} from "@/services/curation";
import AdminRepoCard from "@/components/admin/AdminRepoCard";

export default function AdminPage() {
  const { status, signIn, logout, configured } = useAuth();

  if (status === "authorized") return <CurationEditor onLogout={logout} />;
  return (
    <AuthGate
      status={status}
      configured={configured}
      onSignIn={signIn}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Gate de autenticação (Firebase / Google)                            */
/* ------------------------------------------------------------------ */
function AuthGate({
  status,
  configured,
  onSignIn,
}: {
  status: ReturnType<typeof useAuth>["status"];
  configured: boolean;
  onSignIn: () => Promise<void>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleSignIn = async () => {
    setError(null);
    setBusy(true);
    try {
      await onSignIn();
    } catch (err) {
      // Ignora fechamento do popup pelo usuário.
      const code = (err as { code?: string }).code ?? "";
      if (code !== "auth/popup-closed-by-user" && code !== "auth/cancelled-popup-request") {
        setError("Não foi possível entrar. Tente novamente.");
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-synth-void text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <FiLock className="text-synth-secondary" size={22} />
          <h1 className="font-display text-xl tracking-wider">Painel de Curadoria</h1>
        </div>

        {!configured ? (
          <p className="text-synth-primary text-sm font-mono leading-relaxed">
            Firebase não configurado. Preencha as variáveis <code>VITE_FIREBASE_*</code>{" "}
            em <code>.env.local</code> para habilitar o login.
          </p>
        ) : (
          <>
            <p className="text-gray-400 text-sm mb-6 font-light">
              Área restrita. Entre com a conta Google autorizada para editar os
              projetos do portfólio.
            </p>
            <button
              onClick={handleSignIn}
              disabled={busy || status === "loading"}
              className="w-full flex items-center justify-center gap-3 py-3 bg-white/95 hover:bg-white text-gray-800 font-medium rounded-lg transition-colors disabled:opacity-60"
            >
              <FcGoogle size={20} />
              {busy ? "Entrando..." : "Entrar com Google"}
            </button>
            {status === "denied" && (
              <p className="text-synth-primary text-xs mt-3 font-mono">
                Esta conta não tem permissão de acesso.
              </p>
            )}
            {error && (
              <p className="text-synth-primary text-xs mt-3 font-mono">{error}</p>
            )}
          </>
        )}

        <Link
          to="/"
          className="mt-6 flex items-center justify-center gap-2 text-gray-500 hover:text-white text-sm font-mono transition-colors"
        >
          <FiArrowLeft size={14} /> Voltar ao portfólio
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Editor de curadoria                                                 */
/* ------------------------------------------------------------------ */
function CurationEditor({ onLogout }: { onLogout: () => Promise<void> }) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [curation, setCuration] = useState<CurationMap>(() => loadCuration());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setRepos(await fetchRepos(controller.signal));
      } catch (err) {
        if (!controller.signal.aborted)
          setError(err instanceof Error ? err.message : "Erro ao carregar.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  const flash = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2500);
  };

  const getCuration = (name: string): RepoCuration =>
    curation[name] ?? emptyCuration(featuredCount);

  const featuredCount = useMemo(
    () => Object.values(curation).filter((c) => c.featured && !c.hidden).length,
    [curation]
  );

  const patch = (name: string, changes: Partial<RepoCuration>) => {
    setCuration((prev) => {
      const base = prev[name] ?? emptyCuration(featuredCount);
      return { ...prev, [name]: { ...base, ...changes } };
    });
  };

  const move = (name: string, dir: -1 | 1) => {
    setCuration((prev) => {
      const featured = repos
        .filter((r) => prev[r.name]?.featured && !prev[r.name]?.hidden)
        .sort((a, b) => (prev[a.name].order ?? 0) - (prev[b.name].order ?? 0));
      const idx = featured.findIndex((r) => r.name === name);
      const swapIdx = idx + dir;
      if (idx < 0 || swapIdx < 0 || swapIdx >= featured.length) return prev;
      const a = featured[idx].name;
      const b = featured[swapIdx].name;
      return {
        ...prev,
        [a]: { ...prev[a], order: swapIdx },
        [b]: { ...prev[b], order: idx },
      };
    });
  };

  const handleSave = () => {
    saveCuration(curation);
    flash("Curadoria salva neste navegador.");
  };

  const handleReset = () => {
    if (!confirm("Descartar todas as edições locais e voltar ao padrão?")) return;
    setCuration(resetCuration());
    flash("Curadoria redefinida.");
  };

  const handleExport = async () => {
    const json = exportCuration(curation);
    try {
      await navigator.clipboard.writeText(json);
      flash("JSON copiado! Cole em src/data/curationDefaults.ts");
    } catch {
      window.prompt("Copie o JSON da curadoria:", json);
    }
  };

  const handleImport = () => {
    const json = window.prompt("Cole o JSON da curadoria para importar:");
    if (!json) return;
    try {
      setCuration(importCuration(json));
      flash("Curadoria importada. Não esqueça de salvar.");
    } catch {
      flash("JSON inválido.");
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? repos.filter(
          (r) =>
            r.name.toLowerCase().includes(q) ||
            (r.description ?? "").toLowerCase().includes(q)
        )
      : repos;
    // Destacados primeiro (por ordem), depois o resto por atualização.
    return [...list].sort((a, b) => {
      const fa = curation[a.name]?.featured ? 0 : 1;
      const fb = curation[b.name]?.featured ? 0 : 1;
      if (fa !== fb) return fa - fb;
      if (fa === 0)
        return (curation[a.name].order ?? 0) - (curation[b.name].order ?? 0);
      return b.updatedAt.localeCompare(a.updatedAt);
    });
  }, [repos, curation, query]);

  return (
    <div className="min-h-screen bg-synth-void text-white">
      {/* Barra superior */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-synth-deep/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center gap-3 justify-between">
          <div>
            <h1 className="font-display tracking-wider text-lg">
              Curadoria de <span className="text-synth-primary">Projetos</span>
            </h1>
            <p className="text-xs text-gray-500 font-mono">
              {featuredCount} destacado(s) · {repos.length} repositórios
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ToolbarButton onClick={handleImport} icon={FiUpload} label="Importar" />
            <ToolbarButton onClick={handleExport} icon={FiDownload} label="Exportar" />
            <ToolbarButton onClick={handleReset} icon={FiRotateCcw} label="Redefinir" />
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-synth-secondary/20 border border-synth-secondary text-synth-secondary hover:bg-synth-secondary/40 hover:text-white font-mono text-sm transition-colors"
            >
              <FiSave size={16} /> Salvar
            </button>
            <button
              onClick={() => void onLogout()}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white text-sm font-mono transition-colors"
            >
              <FiLogOut size={14} /> Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Busca */}
        <div className="relative mb-8 max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar repositório..."
            className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 font-mono text-sm focus:border-synth-secondary focus:outline-none"
          />
        </div>

        {loading && (
          <p className="text-gray-400 font-mono text-sm">Carregando repositórios...</p>
        )}
        {error && (
          <p className="text-synth-primary font-mono text-sm">{error}</p>
        )}

        <div className="space-y-4">
          {filtered.map((repo) => (
            <AdminRepoCard
              key={repo.id}
              repo={repo}
              curation={getCuration(repo.name)}
              onPatch={(changes) => patch(repo.name, changes)}
              onMove={(dir) => move(repo.name, dir)}
            />
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-600 font-mono leading-relaxed max-w-2xl">
          Dica: ajuste os projetos, clique em <span className="text-gray-400">Salvar</span> para
          testar neste navegador e, quando estiver satisfeito, use{" "}
          <span className="text-gray-400">Exportar</span> e cole o JSON em{" "}
          <span className="text-synth-secondary">src/data/curationDefaults.ts</span> para que a
          curadoria valha para todos os visitantes.
        </p>
      </main>

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-synth-deep border border-synth-secondary/40 text-synth-secondary px-5 py-3 rounded-lg font-mono text-sm shadow-[0_0_25px_rgba(0,255,255,0.15)]">
          {toast}
        </div>
      )}
    </div>
  );
}

function ToolbarButton({
  onClick,
  icon: Icon,
  label,
}: {
  onClick: () => void;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/25 text-sm font-mono transition-colors"
    >
      <Icon size={15} /> {label}
    </button>
  );
}
