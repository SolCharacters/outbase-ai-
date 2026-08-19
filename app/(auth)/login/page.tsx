import { Suspense } from "react";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";
import { getUser } from "@/lib/auth/get-user";

export default async function LoginPage() {
  const user = await getUser();
  if (user) redirect("/app");

  return (
    <Suspense fallback={<div className="text-[15px] font-medium text-smoke">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
