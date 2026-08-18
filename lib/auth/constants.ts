export const SESSION_COOKIE = "outbase_session";

export const TEST_CREDENTIALS = {
  email: "demo@outbase.in",
  password: "demo12345",
} as const;

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  workspace: string;
};

export type TestSessionPayload = {
  type: "test";
  user: SessionUser;
};
