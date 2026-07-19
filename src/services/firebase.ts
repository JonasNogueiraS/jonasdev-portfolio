import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId
);

export const adminEmail = (import.meta.env.VITE_ADMIN_EMAIL ?? "")
  .trim()
  .toLowerCase();

let app: FirebaseApp | undefined;
let authInstance: Auth | undefined;

export function getFirebaseAuth(): Auth | undefined {
  if (!isFirebaseConfigured) return undefined;
  if (!authInstance) {
    app = app ?? initializeApp(firebaseConfig);
    authInstance = getAuth(app);
  }
  return authInstance;
}

export const googleProvider = new GoogleAuthProvider();
