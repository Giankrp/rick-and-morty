import Card from "./Card"
import { connect, useDispatch } from "react-redux"
import { filteredCards, orderCards } from "../redux/actions"
import { useState } from "react"

const Favorites = ({ myFavorites, onClose }) => {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    const handleFilter = (event) => {
        dispatch(filteredCards(event.target.value))
    }
    return (

        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknow">unknow</option>
                <option value="allCharacter">allCharacter</option>

            </select>
            {
                myFavorites?.map(favorite => {
                    return (<Card 
                        key={favorite.id}
                        id={favorite.id}
                        name={favorite.name}
                        species={favorite.species}
                        gender={favorite.gender}
                        image={favorite.image}
                        onClose={favorite.onClose} />)
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)