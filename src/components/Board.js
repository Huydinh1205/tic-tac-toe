import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  const getSquares = (start, end) => {
    return squares
      .filter((e, idx) => idx <= end && idx >= start)
      .map((item, idx) => {
        return (
          <Square
            key={idx}
            value={item}
            handleClick={() => {
              handleClick(idx + start);
            }}
          />
        );
      });
  };
  return (
    <div className="board">
      <div>
        <div className="board-row">{getSquares(0, 2)}</div>
        <div className="board-row">{getSquares(3, 5)}</div>
        <div className="board-row">{getSquares(6, 8)}</div>
      </div>
    </div>
  );
}
