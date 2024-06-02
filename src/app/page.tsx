import OrganizationForm from "@/components/OrganizationForm";
import Guide from "@/components/Guide";
import TopRepositories from "@/components/TopRepositories";

export default function Page() {
  return (
    <div className="flex p-5 min-h-screen">
      <div className="w-full">
        <OrganizationForm />
        <Guide />
        <TopRepositories />
      </div>
    </div>
  );
}
