import { NextResponse } from "next/server";
import { getClient } from "@/lib/client";
import { ISSUES_QUERY } from "@/lib/queries";
import { getIssuesFromResponse, getStateFromParam } from "@/lib/utils";
import { PAGE_SIZE } from "@/lib/config";

type Params = {
  organization: string;
  repository: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.searchParams);
  const state = searchParams.get("state") || "all";
  const after = searchParams.get("after");
  const { organization, repository } = context.params;
  if (!organization || !repository) {
    return NextResponse.json(
      { message: "Please provide organization and repository" },
      { status: 400 }
    );
  }

  try {
    const { data }: { data: IssuesResponse } = await getClient().query({
      query: ISSUES_QUERY,
      variables: {
        owner: organization,
        name: repository,
        states: getStateFromParam(state),
        page: PAGE_SIZE,
        cursor: after,
      },
    });

    const issues = getIssuesFromResponse(data);

    return NextResponse.json({
      issues: issues,
      pagination: data?.repository?.issues?.pageInfo || {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
    });
  } catch (error) {
    return NextResponse.json({
      issues: [],
      pagination: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
    });
  }
}
