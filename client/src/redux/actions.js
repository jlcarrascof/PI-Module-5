// These constants are used to identify the actions that are dispatched.
export const GET_POKEMONES = "GET_POKEMONES";
export const SEARCH_POKEMONES = "SEARCH_POKEMONES";
export const SEARCH_ID = "SEARCH_ID";
export const CLEAN_SEARCH = "CLEAN_SEARCH";
export const GET_TYPES = "GET_TYPES";
// const back = import.meta.env.VITE_APP_BACK;

// These actions make HTTP requests to the server, get data, 
// and dispatch actions with that data.

export const getPokemones = () => {
    return async function (dispatch) {
        try {
            const response = await fetch(`http://localhost:3001/pokemones`);
            const pokemones = await response.json();
            dispatch({ type: GET_POKEMONES, payload: pokemones });
        } catch (error) {
            // Manejo de error aquí, puedes dispatchear una acción de error si es necesario
            alert("Algo salio mal - getPokemones");
            console.log(error);
        }
    };
};

export const searchPokemones = (query) => {
    return async function (dispatch) {
        try {
            const response = await fetch(
             `http://localhost:3001/pokemones?name=${query}`
            // `${back}/pokemones?name=${query}`
        );
        const responseData = await response.json();

        if (response.status === 404) {
            alert(responseData.error);
        } else if (response.status === 200) {
            const searchResults = responseData;
            dispatch({ type: SEARCH_POKEMONES, payload: searchResults });
        }
        } catch (error) {
            // Manejo de error aquí
            alert("Algo salio mal - searchPokemones");
        }
    };
};

export const searchID = (id) => {
    return async function (dispatch) {
        try {
            const response = await fetch(
            `http://localhost:3001/pokemones/detail/${id}`
            // `${back}/pokemones/detail/${id}`
            );
        const searchResultsId = await response.json();
        dispatch({ type: SEARCH_ID, payload: searchResultsId });
        } catch (error) {
        // Manejo de error aquí
        console.error("Error searching ID:", error);
        }
    };
};

export const cleanSearch = () => {
    return {
        type: CLEAN_SEARCH,
    };
};

export const getTypes = () => {
    return async function (dispatch) {
        try {
            const response = await fetch(
                "http://localhost:3001/pokemon/types"
                // `${back}/pokemon/types`
            );

            const types = await response.json();
            dispatch({ type: GET_TYPES, payload: types });

        } catch (error) {
            // Manejo de error aquí, puedes dispatchear una acción de error si es necesario
            alert("Algo salio mal - getTypes");
            console.log(error);
        }
    };
};
