import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ActionButton from "./Element";

describe("Component: Element", () => {
  it("select element", () => {
    const onItemClick = jest.fn();
    const text = "test";
    const defaultProps = {
      name: text,
      key: 1,
      isSelected: true,
      onItemClick
    };

    const { getByText } = render(<ActionButton {...defaultProps} />);

    fireEvent.click(getByText(text));
    expect(onItemClick).toHaveBeenCalled();
  });
});
