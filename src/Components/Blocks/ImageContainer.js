import React, { memo } from "react";
import "./imageContainer.scss";
const ImageContainer = memo(({ item, index, onClick }) => {
  return (
    <>
      <div className="imgContainer">
        <img src={item.src.small}></img>
        <div className="details">
          <p>{item?.photographer}</p>
          <i
            class="fa fa-thumbs-up"
            style={{ color: item?.liked ? "red" : "black" }}
            onClick={(e) => onClick(item)}
          ></i>
        </div>
      </div>
    </>
  );
});

export default ImageContainer;
