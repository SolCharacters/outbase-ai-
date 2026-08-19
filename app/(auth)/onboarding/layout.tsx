import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth/get-user";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  if (!user) {
    redirect("/login?next=/onboarding");
  }

  return <>{children}</>;
}
