export const getIssuesFromResponse = (
  data: IssuesResponse
): FormattedIssues[] => {
  const edges =
    (data &&
      data.repository &&
      data.repository.issues &&
      data.repository.issues &&
      data.repository.issues.edges) ||
    [];
  return edges.map((e) => ({
    cursor: e.cursor,
    id: e.node.id,
    number: e.node.number,
    title: e.node.title,
    url: e.node.url,
    state: e.node.state as "OPEN" | "CLOSED",
    author: e.node.author.login,
    createdAt: e.node.createdAt,
    updatedAt: e.node.updatedAt
  }));
};

export const getStateFromParam = (state: string) => {
  switch (state) {
    case "all":
      return ["OPEN", "CLOSED"];
    case "open":
      return ["OPEN"];
    case "closed":
      return ["CLOSED"];
  }
  return ["OPEN", "CLOSED"];
};
