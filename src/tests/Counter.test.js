// Import necessary React Testing Library helpers and dependencies
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from '../components/Counter';

test("renders counter message", () => {
  // Verify that the Counter component renders its heading
  render(<Counter />);
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Verify that the initial count is 0
  render(<Counter />);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  // Simulate a click on the increment button and verify the count increases
  render(<Counter />);
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  // Simulate a click on the decrement button and verify the count decreases
  render(<Counter />);
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("-1");
});
