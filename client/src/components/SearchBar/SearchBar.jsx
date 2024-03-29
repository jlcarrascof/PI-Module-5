import React, { useState } from "react";
import { useDispatch } from "react-redux";
import  style from "./Searchbar.module.css";
import { searchPokemones, cleanSearch} from "../../redux/actions";


const SearchBar = () => {

    // These functions handle the form submission and button click events.

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();   

    const handleSearch = (event) => {   
        event.preventDefault();
        dispatch(searchPokemones(query)); // Pasar la consulta actual
    };

    const handleBackToAll = (event) => {
        event.preventDefault(); 
        dispatch(cleanSearch()); //limpiar estado    
    };

    return (
        
        // This section renders the search bar with an input field 
        // and two buttons.

        <div className={style.searchbar}>
            <form onSubmit={handleSearch}>
                <input
                    className={style.input}
                    type="text"
                    placeholder="Buscar Pokémon"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button className={style.button} type="submit">Buscar</button>   
     
                <button className={style.button}
                    type="button" onClick={handleBackToAll}>
                    Volver a todos los Pokémones
                </button>    
            </form>      
        </div>
    );
};

export default SearchBar;