import React, { useEffect } from "react";
import "./Post.css";

export const Post = ({ testArray, success, fail }) => {
  const [tiles, setTiles] = React.useState([...testArray]);

  React.useEffect(() => {
    if (tiles === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]) {
      success();
    } else {
      fail();
    }
  }, [tiles]);

  const handleTileChange = (tileIndex) => {
    console.log(tileIndex);
    const indexOfZero = tiles.indexOf(0);
    if (indexOfZero === 4 || indexOfZero === 8 || indexOfZero === 12) {
      if (
        tileIndex === indexOfZero - 4 ||
        tileIndex === indexOfZero + 4 ||
        tileIndex === indexOfZero + 1
      ) {
        setTiles((tiles) => {
          let editTiles = [...tiles];
          const tmp = editTiles[tileIndex];
          editTiles[indexOfZero] = tmp;
          editTiles[tileIndex] = 0;
          return editTiles;
        });
      }
    } else if (indexOfZero === 3 || indexOfZero === 7 || indexOfZero === 11) {
      if (
        tileIndex === indexOfZero - 4 ||
        tileIndex === indexOfZero + 4 ||
        tileIndex === indexOfZero - 1
      ) {
        setTiles((tiles) => {
          let editTiles = [...tiles];
          const tmp = editTiles[tileIndex];
          editTiles[indexOfZero] = tmp;
          editTiles[tileIndex] = 0;
          return editTiles;
        });
      }
    } else if (indexOfZero === 0) {
      if (
        tileIndex === indexOfZero - 4 ||
        tileIndex === indexOfZero + 4 ||
        tileIndex === indexOfZero + 1 ||
        tileIndex === 15
      ) {
        setTiles((tiles) => {
          let editTiles = [...tiles];
          const tmp = editTiles[tileIndex];
          editTiles[indexOfZero] = tmp;
          editTiles[tileIndex] = 0;
          return editTiles;
        });
      }
    } else if (indexOfZero === 15) {
      if (
        tileIndex === indexOfZero - 4 ||
        tileIndex === indexOfZero - 1 ||
        tileIndex === 0
      ) {
        setTiles((tiles) => {
          let editTiles = [...tiles];
          const tmp = editTiles[tileIndex];
          editTiles[indexOfZero] = tmp;
          editTiles[tileIndex] = 0;
          return editTiles;
        });
      }
    } else {
      if (
        tileIndex === indexOfZero - 4 ||
        tileIndex === indexOfZero + 4 ||
        tileIndex === indexOfZero + 1 ||
        tileIndex === indexOfZero - 1
      ) {
        setTiles((tiles) => {
          let editTiles = [...tiles];
          const tmp = editTiles[tileIndex];
          editTiles[indexOfZero] = tmp;
          editTiles[tileIndex] = 0;
          return editTiles;
        });
      }
    }
  };

  console.log(tiles);

  return (
    <React.Fragment>
      <div className="board">
        {tiles.map((element, index) => {
          return (
            <div
              className={`tile ${element === 0 ? "empty" : null}`}
              style={{ gridTemplateAreas: `tile${index}` }}
              onClick={() => handleTileChange(index)}
            >
              {element === 0 ? null : element}
            </div>
          );
        })}
      </div>
      <style>
        {`
        .board{
          background: blue;
          height: 400px;
          width: 400px;
          display: grid;
          grid-template-columns: 100px 100px 100px 100px;
          grid-template-rows: 100px 100px 100px 100px;
          grid-template-areas: "tile0 tile1 tile2 tile3" "tile4 tile5 tile6 tile7" "tile8 tile9 tile10 tile11" "tile12 tile13 tile14 tile15";
        }
        .tile{
          background: red;
          position: relative;
          top: 50%;
          transform: translate(0, -50%);
          margin-right: auto;
          margin-left: auto;
          height: 50px;
          width: 50px;
        }
        .empty{
          height: 100px;
          width: 100px;
          background: white;
        }
        `}
      </style>
    </React.Fragment>
  );
};
