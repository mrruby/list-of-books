import React, { SyntheticEvent } from "react";

import "./Input.css";

type Props = {
  input: string;
  setInput: (value: string) => void;
  addElement: Function;
};

function Input({ input, setInput, addElement }: Props) {
  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    addElement(input);
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={input}
        aria-label="add book"
        onChange={event => setInput(event.target.value)}
      />
    </form>
  );
}

export default Input;
