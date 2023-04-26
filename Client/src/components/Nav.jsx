import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch}></SearchBar>
      <button className={style.About}>
        <Link to="/About" >About</Link>
      </button>
      <button className={style.Home}>
        <Link to="/Home" >Home</Link>
      </button>
      <button className={style.Favorites}>
        <Link to="/Favorites" >Favorites</Link>
      </button>
    </div>
  );
};

export default Nav;
