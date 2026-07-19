import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import {
  getFirebaseAuth,
  googleProvider,
  adminEmail,
  isFirebaseConfigured,
} from "@/services/firebase";

export type AuthStatus = "loading" | "signed-out" | "authorized" | "denied";

interface AuthState {
  status: AuthStatus;
  user: User | null;
  configured: boolean;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
}

/** Autenticação do painel via Google; autoriza somente o e-mail configurado. */
export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>(
    isFirebaseConfigured ? "loading" : "signed-out"
  );

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setStatus("signed-out");
      return;
    }
    return onAuthStateChanged(auth, (u) => {
      if (!u) {
        setUser(null);
        setStatus("signed-out");
        return;
      }
      const email = (u.email ?? "").trim().toLowerCase();
      if (adminEmail && email === adminEmail) {
        setUser(u);
        setStatus("authorized");
      } else {
        // Autenticado, mas sem permissão: encerra a sessão.
        setUser(null);
        setStatus("denied");
        void signOut(auth);
      }
    });
  }, []);

  const signIn = async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    await signOut(auth);
  };

  return { status, user, configured: isFirebaseConfigured, signIn, logout };
}
