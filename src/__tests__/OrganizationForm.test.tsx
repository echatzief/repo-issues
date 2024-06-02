import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OrganizationForm from "@/components/OrganizationForm";

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

describe("OrganizationForm component", () => {
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

  it("updates organization state on input change", () => {
    const { getByPlaceholderText } = render(<OrganizationForm />);

    const organizationInput = getByPlaceholderText("reactjs");

    fireEvent.change(organizationInput, {
      target: { value: "new-organization" },
    });

    expect(organizationInput).toHaveValue("new-organization");
  });

  it("updates repository state on input change", () => {
    const { getByPlaceholderText } = render(<OrganizationForm />);

    const repositoryInput = getByPlaceholderText("react.dev");

    fireEvent.change(repositoryInput, { target: { value: "new-repository" } });

    expect(repositoryInput).toHaveValue("new-repository");
  });

  it("updates state select value on change", () => {
    const { getByDisplayValue } = render(<OrganizationForm />);

    const stateSelect = getByDisplayValue("All Issues");

    fireEvent.change(stateSelect, { target: { value: "open" } });

    expect(stateSelect).toHaveValue("open");
  });

  it("disables submit button when organization or repository is empty", () => {
    const { getByText } = render(<OrganizationForm />);

    const submitButton = getByText("Find issues");

    expect(submitButton).toBeDisabled();
  });
});
