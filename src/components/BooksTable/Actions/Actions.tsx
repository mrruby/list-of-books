import React, { useState } from "react";
import ActionButton from "./ActionButton/ActionButton";
import "./Actions.css";

type Props = {
  listEmpty: boolean;
  sort: Function;
  deleteFunction: () => void;
};

function Actions({ sort, deleteFunction, listEmpty }: Props) {
  const [sortedByName, setSortedByName] = useState(false);
  const sorting = () => {
    sort(!sortedByName);
    setSortedByName(!sortedByName);
  };
  return (
    <div className="control">
      <ActionButton
        onClick={sorting}
        text={sortedByName ? "Turn off sorting" : "Sort by name"}
      />
      {!listEmpty && (
        <ActionButton onClick={deleteFunction} text={"Delete selected"} />
      )}
    </div>
  );
}

export default Actions;
