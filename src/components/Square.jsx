import { O } from "./O";
import { X } from "./X";

export const Square = ({ value, clickHandler, index }) => {
  const getInnerText = () => {
    if (value) {
      value = value === "X" ? <X /> : <O />;
      return value;
    } else {
      return "";
    }
  };

  return (
    <button
      className={`square-btn ${"btn-"+index}`}
      onClick={() => clickHandler(index)}
    >
      {getInnerText()}
    </button>
  );
};
