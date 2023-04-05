import SearchBar from "./SearchBar";

const Nav = ( {onSearch} )=>{
    return(
        <div>
            <SearchBar
            onSearch={onSearch}
            >

            </SearchBar>
        </div>
    )
}

export default Nav;