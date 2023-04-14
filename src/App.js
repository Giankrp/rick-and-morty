"./App.css";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "328bd39ab133.78847851ee9a1c82999a";

const email = "tumama@gmail.com";
const password = "tumama123";
function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/Home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("¡No hay personajes con este ID!");
      }
    });
  };
  const onClose = (id) => {
    const characterFilter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(characterFilter);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch}></Nav> : null}

      <Routes>
        <Route path="/" element={<Form login={login}></Form>}></Route>
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Detail/:id" element={<Detail></Detail>}></Route>
        <Route path="/Favorites" element={<Favorites></Favorites>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
