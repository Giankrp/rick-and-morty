'./App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';


function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onClose = (id) => {
      const characterFilter = characters.filter(character => character.id !== Number(id))
      setCharacters(characterFilter);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} ></Nav>
         <Cards characters={characters} onClose={onClose} />

      </div>

   );
}

export default App;
