// This section imports the necessary dependencies for the CardsContainer 
// component.

import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTypes} from "../../redux/actions";
import { useEffect } from "react";

function capitalizeFirstLetter(string) {   // Funcion para primera letra mayuzcula 
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// This section defines the CardsContainer component, including its state 
// and behavior.

const CardsContainer = () => {
    const dispatch = useDispatch();   

    useEffect(() => {
        dispatch(getTypes())
    },[dispatch]);

    //Estados globales
    const pokemones = useSelector(state=>state.pokemones);               
    const searchResults = useSelector((state) => state.searchResults);
    const getTipos= useSelector((state)=>state.types); 


    //Estados locales
    const [selectedType, setSelectedType] = useState(null);
    const [showCreated, setShowCreated] = useState("all");
    const [sortOrder, setSortOrder] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedType, showCreated, sortOrder, searchResults]);

    // Paginado
    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const combinedData = searchResults.length > 0  ? searchResults : pokemones;

    const types = getTipos;

    //Funcion para filtrar y ordenar               
    const getFilteredAndSortedData = () => {
    
    const filteredData = combinedData.filter((pokemon) => {
    const typeFilter = !selectedType || pokemon.types.includes(selectedType);  // si selectType es nulo todos los tipos pasan 
    const createdFilter = showCreated === "all" || pokemon.created === (showCreated === "true");  //Verificamos si showcreated es all 
     
    return typeFilter && createdFilter;
});

// This switch statement sorts the filtered data based on the sortOrder value.

switch (sortOrder) {
    case "nameAsc":
        return filteredData.slice().sort((a, b) => a.name.localeCompare(b.name));
    case "nameDesc":
        return filteredData.slice().sort((a, b) => b.name.localeCompare(a.name));
    case "AtaqueAsc":
        return filteredData.slice().sort((a, b) => a.attack - b.attack);
    case "AtaqueDesc":
        return filteredData.slice().sort((a, b) => b.attack - a.attack);
    default:
        return filteredData;
   }
};

// This section renders the components and handles user interaction. 
// It includes rendering buttons for changing the data order, selectors 
// for filtering data by type and whether they were created or not, 
// Pokémon cards, and pagination buttons.

const filteredAndSortedData = getFilteredAndSortedData();
 
    return(
      <div>
        <div className={style.button}>    
            <button className={style.button}  onClick={() => setSortOrder("default")}>Orden original</button>
            <button className={style.button}  onClick={() => setSortOrder("nameAsc")}>Nombre A-Z</button>
            <button className={style.button}  onClick={() => setSortOrder("nameDesc")}>Nombre Z-A</button>
            <button className={style.button}  onClick={() => setSortOrder("AtaqueAsc")}>Ataque ascendente</button>
            <button className={style.button}  onClick={() => setSortOrder("AtaqueDesc")}>Ataque descendente</button>

            <select className={style.select} onChange={(e) => setSelectedType(e.target.value)} value={selectedType || ""}>
                <option value="">Mostrar todos</option>
                    {types.map((type) => (
                <option key={type} value={type}>
                    {capitalizeFirstLetter(type)}
                </option>
            ))}
            </select>     

            <select className= {style.select} onChange={(e) => setShowCreated(e.target.value)}  value={showCreated}>
                <option value="all">Mostrar todos</option>
                <option value={true}>Creados</option>
                <option value={false}>No Creados</option>
            </select>
        </div>      

       <div className={style.cards}>
         
            {filteredAndSortedData.slice(startIndex, endIndex).map(pokemon => { //renderizado y paginado starindex y endindex posiciones para extraer del array
         
                return <Card
                    key={pokemon.id}
                    id = {pokemon.id}
                    name = { capitalizeFirstLetter(pokemon.name)}
                    image = {pokemon.image}               
                    types = {pokemon.types}
                    attack = {pokemon.attack}
                    created = {pokemon.created}       
                />
            })}

        </div>       

        <div className={style.pagination}>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                Anterior
            </button>

            <p className={style.heading}>pagina:{currentPage}</p>

            <button   onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= filteredAndSortedData.length}>
                Siguiente
            </button>
        </div>
    
    </div>
    )
}

export default CardsContainer;
