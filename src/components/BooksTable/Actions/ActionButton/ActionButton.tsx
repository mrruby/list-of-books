import React from "react";

import "./ActionButton.css";

type Props = {
  onClick: () => void;
  text: string;
};

function ActionButton({ onClick, text }: Props) {
  return (
    <button className={`action`} onClick={onClick}>
      <span className="text">{text}</span>
    </button>
  );
}

export default ActionButton;
