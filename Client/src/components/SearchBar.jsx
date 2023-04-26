import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {

   const [id,setId]= useState("")

   const handleChange= (event)=>{
      setId(event.target.value)

   }

   return (
      <div>
          <input type='search' onChange={handleChange} value={id} className={style.SearchBar} />
         <button onClick={()=>{onSearch(id) ; setId("")}}>Agregar</button> 
      </div>
   );
}
