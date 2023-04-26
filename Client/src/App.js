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
const URL = "http://localhost:3001/rickandmorty/login";
const email = "tumama@gmail.com";
const password = "tumama123";
function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const {access} = data

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert("Error al iniciar sesion");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };


const onClose = (id) => {
  const characterFilter = characters.filter((character) => character.id !== id);
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
      <Route path="/Favorites" element={<Favorites></Favorites>}></Route>
    </Routes>
  </div>
);
}
export default App;
