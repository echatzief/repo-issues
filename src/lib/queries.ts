import { gql } from "@apollo/client";

export const ISSUES_QUERY = gql`
  query (
    $owner: String!
    $name: String!
    $states: [IssueState!] = [CLOSED, OPEN]
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    repository(owner: $owner, name: $name) {
      issues(
        first: $first, 
        last: $last, 
        after: $after, 
        before: $before
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
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;
