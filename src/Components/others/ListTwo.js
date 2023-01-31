import React, { useCallback } from "react";
import { useGetImages } from "../../Hooks/getImages";
import ImageContainer from "../Blocks/ImageContainer";
import "./ListOne.scss";

function ListTwo() {
  const { data, setData } = useGetImages();

  const handleClickImage = useCallback(
    (imgItem) => {
      setData((prevState) =>
        prevState.map((obj) => {
          if (obj.id == imgItem.id) {
            return { ...obj, liked: !obj.liked };
          }
          return obj;
        })
      );
    },
    [setData]
  );

  //   The dependency array [setData] ensures that the handleClickImage function is only re-created when the setData function changes.

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

export default ListTwo;

// issue: handleClickImage function can lead to multiple re-renders
//because the function is recreated on every render, and the setData
//hook triggers a re-render when it updates the state.

// By passing the setState function as a dependency, you ensure that the memoized function is only re-created when the setState function changes
