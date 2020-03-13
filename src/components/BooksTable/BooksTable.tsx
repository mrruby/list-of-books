import React, { useState } from "react";
import data from "../../data.json";
import Element from "./Element/Element";

import "./BooksTable.css";
import Actions from "./Actions/Actions";
import Input from "./Input/Input";
import { Data } from "../../types.js";

function BooksTable() {
  const [list, setList] = useState(data);
  const [input, setInput] = useState("");
  const [selectedList, setSelectedList] = useState<number[]>([]);

  const isSelected = (key: number) => selectedList.includes(key);
  const onItemClick = (key: number) => () =>
    setSelectedList(
      isSelected(key)
        ? [...selectedList.filter(val => val !== key)]
        : [...selectedList, key]
    );

  const sort = (byName: boolean) =>
    setList([
      ...list.sort((a, b) =>
        byName ? a.name.localeCompare(b.name) : a.key - b.key
      )
    ]);

  const getNewKey = (list: Data[]) =>
    Math.max(...list.map(({ key }) => key)) + 1;

  const addElement = (value: string) => {
    setList([...list, { name: value, key: getNewKey(list) }]);
  };

  const deleteFunction = () => {
    setList(list.filter(x => !selectedList.includes(x.key)));
    setSelectedList([]);
  };

  return (
    <>
      <div className="outer container">
        <div className="container">
          <p className="title">{`List of books`}</p>
          <Input input={input} setInput={setInput} addElement={addElement} />
          <div className="elements">
            {list.map(({ name, key }) => (
              <Element
                name={name}
                key={key}
                onItemClick={onItemClick(key)}
                isSelected={isSelected(key)}
              />
            ))}
          </div>
        </div>
      </div>
      <Actions
        sort={sort}
        deleteFunction={deleteFunction}
        listEmpty={selectedList.length === 0}
      />
    </>
  );
}

export default BooksTable;
