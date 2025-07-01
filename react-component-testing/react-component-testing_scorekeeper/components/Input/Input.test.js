import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="Name of game" placeholder="e.g. Dodelido" />);
  const labelOfForm = screen.getByText("Name of game");
  const placeholderInputOfForm = screen.getByPlaceholderText("e.g. Dodelido");

  expect(labelOfForm).toBeInTheDocument();
  expect(placeholderInputOfForm).toBeInTheDocument();
});

test("calls callback on every user input", async () => {});
