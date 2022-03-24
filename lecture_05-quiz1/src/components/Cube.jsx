import { useEffect, useState } from "react";

const Cube = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);

  const handleMouseMove = (e) => {
    const board = e.target.getBoundingClientRect();
    const x = Math.round(e.screenX - board.left);
    const y = Math.round(e.screenY - 2 * board.top);

    setCoordinates([x, y]);
  };

  useEffect(() => {
    const board = document.getElementById("board");
    board.addEventListener("mousemove", handleMouseMove);

    return () => {
      board.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cube">
      <div className="board" id="board">
        <h2 className="coords">
          X: {coordinates[0]}, Y: {coordinates[1]}
        </h2>

        <div
          className="square"
          id="square"
          style={{ left: coordinates[0] + "px", top: coordinates[1] }}
        ></div>
      </div>
    </div>
  );
};

export default Cube;
