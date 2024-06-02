import React from "react";
import { render } from "@testing-library/react";
import Guide from "@/components/Guide";

describe("Guide component", () => {
  it("renders the guide with correct content", () => {
    const { getByRole, getByText } = render(<Guide />);

    const alertElement = getByRole("alert");
    expect(alertElement).toBeInTheDocument();

    const iconElement = alertElement.querySelector("svg");
    expect(iconElement).toBeInTheDocument();

    const textElement = getByText(
      "Enter the organization and repository to view all issues"
    );
    expect(textElement).toBeInTheDocument();
  });
});
