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
  first: string;
  after: string;
  last: string;
  before: string;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { organization, repository } = params;
  const { state, first, after, last, before } = searchParams;
  const queryParams = [];

  if (state) {
    queryParams.push(`state=${state}`);
  }

  if (first) {
    queryParams.push(`first=${first}`);
  }

  if (after) {
    queryParams.push(`after=${after}`);
  }

  if (last) {
    queryParams.push(`last=${last}`);
  }

  if (before) {
    queryParams.push(`before=${before}`);
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
