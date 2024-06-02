type IssuesResponse = {
  repository: Repository;
};

type Repository = {
  __typename: string;
  issues: Issues;
};

type Issues = {
  __typename: string;
  edges: Edge[];
  pageInfo: PageInfo;
};

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
};

type Edge = {
  __typename: string;
  cursor: string;
  node: EdgeNode;
};

type EdgeNode = {
  __typename: string;
  id: string;
  number: number;
  title: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  state: string;
  author: Author;
  comments: Comments;
};

type Author = {
  __typename: string;
  login: string;
};

type Comments = {
  __typename: string;
  totalCount: number;
};

type FormattedIssues = {
  cursor: string;
  id: string;
  number: number;
  title: string;
  url: string;
  state: "OPEN" | "CLOSED";
  author: string;
  createdAt: string;
  updatedAt: string;
};
