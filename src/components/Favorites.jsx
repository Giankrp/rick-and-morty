import Card from "./Card"
import { connect } from "react-redux"

const Favorites = ({ myFavorites }) => {
    return (
        <div>
            {
                myFavorites?.map(favorite => {
                    return <Card key={favorite.id}
                        id={favorite.id}
                        name={favorite.name}
                        species={favorite.species}
                        gender={favorite.gender}
                        image={favorite.image} />
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