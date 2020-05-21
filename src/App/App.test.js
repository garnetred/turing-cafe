import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("Turing Cafe Reservations")).toBeInTheDocument();
  });

  it("should add a new reservation", () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "Ryan" },
    });
    fireEvent.change(getByPlaceholderText("number"), { target: { value: 12 } });
    fireEvent.change(getByPlaceholderText("date(mm/dd)"), {
      target: { value: "05/30" },
    });
    fireEvent.change(getByPlaceholderText("time"), {
      target: { value: "7:00" },
    });
    fireEvent.click(getByText("Make Reservation"));
    expect(getByText("Ryan")).toBeInTheDocument();
  });
});
