/**
 * Configuração central do site
 */
export const siteConfig = {
  githubUser: "JonasNogueiraS",

  /** Quantos repositórios buscar  */
  githubPerPage: 100,
  /** E-mail de contato exibido no rodapé e na seção de contato. */
  contactEmail: "jonasnogueiira@gmail.com",
  /**
   * Link para o currículo (PDF). Coloque o arquivo em /public ou use uma URL
   * externa (Google Drive, etc). Deixe vazio para ocultar o botão.
   */
  resumeUrl: "",
} as const;
