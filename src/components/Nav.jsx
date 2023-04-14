import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch}></SearchBar>
      <button>
        <Link to="/About">About</Link>
      </button>
      <button>
        <Link to="/Home">Home</Link>
      </button>
      <button>
        <Link to="/Favorites">Favorites</Link>
      </button>
    </div>
  );
};

export default Nav;
