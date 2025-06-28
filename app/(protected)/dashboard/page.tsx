import WelcomeDashboard from "@/components/dashboard/welcome";
import { SectionCards } from "@/components/section-cards";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const navUser = {
    name: session?.user.name || "",
    email: session?.user.email || "",
    avatar: session?.user.image || "",
    role: session?.user.role || "",
  };

  if (!navUser) {
    redirect("/login");
  }

  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="py-4 px-8">
        <WelcomeDashboard user={navUser} />
      </div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
      </div>
    </div>
  );
}
