# Repository Issues

This project is a tool for managing GitHub repository issues. It allows users to view and query repository issues directly from the app.

## Requirements

- Node.js v20.10.0
- Personal GitHub token
- Yarn

## Installation

Clone the repository locally:

```bash
git clone git@github.com:echatzief/repo-issues.git
```

Navigate to the project directory:
```bash
cd repo-issues
```

Install dependencies using Yarn:
```bash
yarn install
```
Setup your personal GitHub token:
- Create a personal access token on GitHub with appropriate permissions (usually repo access is needed).
- Replace YOUR_GITHUB_TOKEN with your actual token in src/lib/config.ts.

To start the app, run the following command:

```bash
yarn run dev 
```

To run the tests:

```bash
yarn run test 
```
