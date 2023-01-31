import React, { useCallback, useState } from "react";
import ListItem from "../Blocks/ListItem";
import "./all.scss";

function All() {
  const [data, setData] = useState([
    { id: "1", value: "" },
    { id: "2", value: "" },
    { id: "3", value: "" },
  ]);

  const onChangeHandler = ((id, value) => {
    let newVal = [...data];
    newVal[id].value = value;
    setData(newVal);

    // console.log("hey change..", id, value);
    // setData((prevItems) =>
    //   prevItems.map((item) => {
    //     if (item.id == id) {
    //       item.value = value;
    //     }
    //     return item;
    //   })
    // );

    
  });

  return (
    <>
      <div>
        <div>
          <p>{JSON.stringify(data)}</p>
        </div>
        <div className="data-container">
          {data?.map((item, i) => {
            return (
              <ListItem
                value={item.value}
                id={item.id}
                index={i}
                onChange={onChangeHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default All;
