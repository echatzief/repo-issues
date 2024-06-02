import IssuesTable from "@/components/IssuesTable";
import OrganizationForm from "@/components/OrganizationForm";
import { BASE_INTERAL_API_URL } from "@/lib/config";

type Params = {
  organization: string;
  repository: string;
  state: string;
};

type SearchParams = {
  state: string;
  after: string;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { organization, repository } = params;
  const { state, after } = searchParams;
  const queryParams = [];

  if (state) {
    queryParams.push(`state=${state}`);
  }
  if (after) {
    queryParams.push(`after=${after}`);
  }

  const res = await fetch(
    `${BASE_INTERAL_API_URL}/issues/${organization}/${repository}?${queryParams.join(
      "&"
    )}`
  );

  const {
    issues,
    pagination,
  }: { issues: FormattedIssues[]; pagination: PageInfo } = await res.json();

  return (
    <div className="flex p-5 min-h-screen">
      <div className="w-full">
        <OrganizationForm
          defaultOrganization={organization}
          defaultRepository={repository}
          defaultState={state}
        />
        <IssuesTable issues={issues} pagination={pagination} />
      </div>
    </div>
  );
}
