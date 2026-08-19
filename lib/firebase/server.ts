import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

function getPrivateKey(): string | undefined {
  const raw = process.env.FIREBASE_PRIVATE_KEY;
  if (!raw) return undefined;
  return raw.replace(/\\n/g, "\n");
}

export function isFirebaseAdminReady() {
  return Boolean(process.env.FIREBASE_CLIENT_EMAIL && getPrivateKey());
}

export function getFirebaseAdminApp() {
  if (getApps().length) return getApp();

  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = getPrivateKey();
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

  if (!clientEmail || !privateKey) {
    return null;
  }

  return initializeApp({
    credential: cert({ clientEmail, privateKey, projectId }),
  });
}

export function getFirebaseAdminAuth() {
  const app = getFirebaseAdminApp();
  if (!app) {
    throw new Error(
      "Firebase Admin is not configured. Set FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY in .env.local."
    );
  }
  return getAuth(app);
}
