import React, { useCallback } from "react";
import { useGetImages } from "../../Hooks/getImages";
import ImageContainer from "../Blocks/ImageContainer";
import "./ListOne.scss";

function ListOne() {
  const { data, setData } = useGetImages();

  const handleClickImage = (imgItem) => {
    const updatedData = data.map((obj) => {
      if (obj.id === imgItem.id) {
        return { ...obj, liked: !obj.liked };
      }
      return obj;
    });

    setData(updatedData);
  };

  return (
    <div>
      <div className="gallery">
        {data?.map((item, index) => {
          return (
            <>
              <ImageContainer
                item={item}
                index={index}
                onClick={handleClickImage}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ListOne;
