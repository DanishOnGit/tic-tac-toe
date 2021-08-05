import { Link } from "react-router-dom";
import { O, X } from "../components";
import { useUserData } from "../context/UserDataProvider";

export const SelectSide = () => {
  const {
    dispatch,
    state: { chosenSide },
  } = useUserData();
  const selectSide = (side) => {
    dispatch({ type: "SET_SIDE", payload: { side } });
  };
  return (
    <div className="home-wrapper">
      <h1 className="p-tb2 font-sm">Pick your side</h1>

      <div >
        <label className="radio-label mr-2">
          <input
            checked={chosenSide === "X"}
            className="radio-blue"
            type="radio"
            value="X"
            name="side"
            onChange={(e) => selectSide(e.target.value)}
          />
          <span className="radio-symbol checkmark"></span>
          <X />
        </label>
        <label className="radio-label">
          <input
            checked={chosenSide === "O"}
            className="radio-blue "
            type="radio"
            value="O"
            name="side"
            onChange={(e) => selectSide(e.target.value)}
          />
          <span className="radio-symbol checkmark"></span>
          <O />
        </label>
      </div>

      <br />
      <Link to="/game" className="btn btn-secondary mt-1">
        Continue
      </Link>
    </div>
  );
};
