import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ActionButton from "./ActionButton";

describe("Component: ActionButton", () => {
  it("function is called after button click", () => {
    const onClick = jest.fn();
    const text = "test";
    const defaultProps = {
      onClick,
      text
    };

    const { getByText } = render(<ActionButton {...defaultProps} />);

    fireEvent.click(getByText(text));
    expect(onClick).toHaveBeenCalled();
  });
});
