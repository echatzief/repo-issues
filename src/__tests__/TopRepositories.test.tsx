import React from "react";
import { render } from "@testing-library/react";
import TopRepositories from "@/components/TopRepositories";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

const mockTopRepositories = [
  {
    title: "React.js",
    organization: "reactjs",
    repository: "react.dev",
  },
  {
    title: "Vue.js",
    organization: "vuejs",
    repository: "core",
  },
];

describe("TopRepositories component", () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    const useRouter = jest.spyOn(require("next/navigation"), "useRouter");

    useRouter.mockImplementation(() => ({
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the top repositories with correct content", () => {
    const { getByText } = render(<TopRepositories />);
    mockTopRepositories.forEach((repo) => {
      const repoTitleElement = getByText(repo.title);
      expect(repoTitleElement).toBeInTheDocument();
    });
  });
});
