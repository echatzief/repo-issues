import { gql } from "@apollo/client";

export const ISSUES_QUERY = gql`
  query (
    $owner: String!
    $name: String!
    $states: [IssueState!] = [CLOSED, OPEN]
    $page: Int!
    $cursor: String
  ) {
    repository(owner: $owner, name: $name) {
      issues(
        first: $page
        after: $cursor
        states: $states
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        edges {
          cursor
          node {
            id
            number
            title
            url
            createdAt
            updatedAt
            state
            author {
              login
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
