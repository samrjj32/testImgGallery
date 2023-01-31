import React, { memo } from "react";
import "./list.scss";

const ListItem = memo(({ index, id, value, onChange }) => {
  return (
    <div className="list-item">
      <p>Re-render {(Math.random() * 100).toFixed()}</p>
      <input
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
      ></input>
    </div>
  );
});

export default ListItem;
