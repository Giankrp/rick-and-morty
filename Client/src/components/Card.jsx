import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";



function Card({ id, name, status, species, gender, origin, image, onClose,
   addFav, removeFav, myFavorites }) {

   const [fav, setFav] = useState(false)

   const handleFavorite = () => {
      if (fav) {
         setFav(false)
         removeFav(id)
      } else {
         setFav(true)
         addFav({ id, name, status, species, gender, origin, image, onClose })
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   },[myFavorites]);
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>


         <button onClick={handleFavorite}>{fav ? "❤️" : "🤍"} </button>


         <Link to={`/Detail/${id}`}>
            <h2> Nombre: {name} </h2>
         </Link>

         <h2> Estado:{status} </h2>
         <h2> Especie: {species} </h2>
         <h2> Genero: {gender} </h2>
         <h2> Origen: {origin} </h2>
         <img src={image} alt='not Found' />
      </div>
      //nvim
   );
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)