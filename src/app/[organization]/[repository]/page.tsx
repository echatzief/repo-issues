import IssuesTable from "@/components/IssuesTable";
import OrganizationForm from "@/components/OrganizationForm";
import { BASE_INTERAL_API_URL } from "@/lib/config";

type Params = {
  organization: string;
  repository: string;
};

type SearchParams = {
  state: string;
}

export default async function Page({ params, searchParams }: { params: Params, searchParams: SearchParams }) {
  const { organization, repository } = params;
  const { state } = searchParams;
  const res = await fetch(
    `${BASE_INTERAL_API_URL}/issues/${organization}/${repository}?state=${state || 'all'}`
  );
  const { issues }: { issues: FormattedIssues[] } = await res.json();

  return (
    <div className="flex p-5 min-h-screen">
      <div className="w-full">
        <OrganizationForm
          defaultOrganization={organization}
          defaultRepository={repository}
        />
        <IssuesTable issues={issues}/>
      </div>
    </div>
  );
}
