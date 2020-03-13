import React from "react";

import "./Element.css";
import { Data } from "../../../types";

type Props = Data & { isSelected: boolean; onItemClick:  () => void};

function Element({ name, isSelected, onItemClick }: Props) {
  return <p onClick={onItemClick} className={`element ${isSelected && "selected"}`}>{name}</p>;
}

export default Element;
