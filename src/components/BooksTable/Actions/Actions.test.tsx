import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Actions from "./Actions";

describe("Component: Actions", () => {
  const sort = jest.fn();
  const deleteFunction = jest.fn();
  const defaultProps = {
    sort,
    deleteFunction,
    listEmpty: false
  };

  it("should click 'Sort by name' function on proper text", () => {
    const { getByText } = render(<Actions {...defaultProps} />);
    fireEvent.click(getByText("Sort by name"));
    expect(sort).toHaveBeenCalled();
  });
  it("should call delete button function after click whe selected list is not empty", () => {
    const { getByText } = render(<Actions {...defaultProps} />);
    fireEvent.click(getByText("Delete selected"));
    expect(deleteFunction).toHaveBeenCalled();
  });
  it("should hide 'Delete button' if selected list is empty", () => {
    const { queryByText } = render(
      <Actions {...defaultProps} listEmpty={true} />
    );
    expect(queryByText("Delete selected")).toBeNull();
  });
});
