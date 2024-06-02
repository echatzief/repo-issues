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
};

type Edge = {
  __typename: string;
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
  id: string;
  number: number;
  title: string;
  url: string;
  state: 'OPEN' | 'CLOSED';
  author: string;
  createdAt: string;
  updatedAt: string;
}