"./App.css";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "328bd39ab133.78847851ee9a1c82999a";
function App() {
   
  const [characters, setCharacters] = useState([]);

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
      <Nav onSearch={onSearch}></Nav>
      <Routes>
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Detail/:id" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
