export default function Card({id, name, status, species, gender, origin, image,onClose}) {
   return (
      <div>
          <button onClick={onClose}>X</button>
         <h2> Id: {id} </h2>
         <h2> Nombre{name} </h2>
         <h2> Estado:{status} </h2>
         <h2> Especie: {species} </h2>
         <h2> Genero: {gender} </h2>
         <h2> Origen: {origin} </h2>
         <img src={image} alt='not Found' /> 
      </div>
   );
}
