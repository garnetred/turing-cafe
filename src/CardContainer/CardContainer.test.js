import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardContainer from "./CardContainer";

describe("Card Container", () => {
  it("should render cards", () => {
    const reservations = [
      { date: "12/29", id: 1, name: "Christie", number: 12, time: "7:00" },
    ];
    const { getByText } = render(<CardContainer data={reservations} />);
    expect(getByText("Christie")).toBeInTheDocument();
  });
});
