import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Component: Input", () => {
  it("add element after eneter clicked", () => {
    const setInput = jest.fn();
    const addElement = jest.fn();
    const input = "test";
    const defaultProps = {
      input,
      setInput,
      addElement
    };

    const { getByLabelText } = render(<Input {...defaultProps} />);
    const inputNode = getByLabelText("add book");
    fireEvent.submit(inputNode);
    expect(addElement).toHaveBeenCalledWith(input);
  });
});
