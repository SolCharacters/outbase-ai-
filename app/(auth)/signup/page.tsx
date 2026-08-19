import { redirect } from "next/navigation";
import { SignupForm } from "@/components/auth/signup-form";
import { getUser } from "@/lib/auth/get-user";

export default async function SignupPage() {
  const user = await getUser();
  if (user) redirect("/app");

  return <SignupForm />;
}
