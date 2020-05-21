import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card", () => {
  it("should render a single card", () => {
    const reservations = {
      date: "12/29",
      id: 1,
      name: "Christie",
      number: 12,
      time: "7:00",
    };
    const { getByText } = render(<Card {...reservations} />);
    expect(getByText("Christie")).toBeInTheDocument();
  });
});
