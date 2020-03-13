import React from "react";
import { render, fireEvent } from "@testing-library/react";
import data from "../../data.json";
import BooksTable from "./BooksTable";

describe("Component: BooksTable", () => {
  it("renders Initial List", () => {
    const { getByText } = render(<BooksTable />);
    data.map(({ name }, index) => expect(getByText(name)).toBeTruthy());
  });
  it("removes item after click", () => {
    const { getByText, queryByText } = render(<BooksTable />);
    const clickText = data[0].name;
    fireEvent.click(getByText(clickText));
    const deleteSelected = getByText("Delete selected");
    fireEvent.click(deleteSelected);
    expect(queryByText(clickText)).toBeNull();
  });
});
