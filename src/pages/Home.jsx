import { Link, useNavigate } from "react-router-dom";
import { O, X } from "../components";
import { useUserData } from "../context/UserDataProvider";

export const Home = () => {
  const { dispatch } = useUserData();
  const navigate = useNavigate();
  const selectPlayer = (player) => {
    dispatch({ type: "SET_OPPONENT", payload: { opponent: player } });
    navigate("/pick-side");
  };

  return (
    <div className="home-wrapper">
      <X />
      <O />
      <h1 className="p-tb2 font-sm">Choose your play mode</h1>
      <br />
      <button onClick={() => selectPlayer("AI")} className="btn primary-btn">
        With AI
      </button>
<br/>
      <button
        className="btn btn-secondary mt-1"
        onClick={() => selectPlayer("Player 2")}
      >
        With a friend
      </button>

      <br />
      <Link to="/" className="btn-icon mt-3 rounded-full ">
        <i className="fas fa-cog text-blue"></i>
      </Link>
    </div>
  );
};
