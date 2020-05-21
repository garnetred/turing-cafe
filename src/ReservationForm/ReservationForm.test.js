import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReservationForm from "./ReservationForm";

describe("Reservation Form", () => {
  it("should render a login form on the page", () => {
    const { getByText } = render(<ReservationForm />);
    expect(getByText("Make Reservation")).toBeInTheDocument();
  });

  it("should not submt an incomplete form", () => {
    const mockSubmitForm = jest.fn({});
    const { getByPlaceholderText, getByText } = render(
      <ReservationForm mockSubmitForm={mockSubmitForm} />
    );
    fireEvent.change(getByPlaceholderText("name"), {
      target: { value: "" },
    });
    fireEvent.change(getByPlaceholderText("number"), { target: { value: "" } });
    fireEvent.change(getByPlaceholderText("date(mm/dd)"), {
      target: { value: "" },
    });
    fireEvent.change(getByPlaceholderText("time"), {
      target: { value: "" },
    });
    fireEvent.click(getByText("Make Reservation"));
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  it("should submit a complete form", () => {
    const mockSubmitForm = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ReservationForm mockSubmitForm={mockSubmitForm} />
    );
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
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
