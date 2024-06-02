import { gql } from "@apollo/client";

export const ISSUES_QUERY = gql`
  query ($owner: String!, $name: String!, $states: [IssueState!] = [CLOSED, OPEN]) {
    repository(owner: $owner, name: $name) {
      issues(
        first: 10
        orderBy: { field: CREATED_AT, direction: DESC }
        states: $states
      ) {
        edges {
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
            comments {
              totalCount
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
