import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemones} from "../../redux/actions";
import style from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

// This section defines the Home component, which dispatches the 
// getPokemones action when the component mounts and renders the 
// SearchBar and CardsContainer components.

const Home = () => {
    console.log("Hola estoy aqui");
    const dispatch  = useDispatch();
    // cuando se monta , que haga el dispatch 
    // useEffect()  - useDispatch()  => son hooks 
    useEffect(()=>{   // maneja el ciclo de vida del componente cuando se monta
        dispatch(getPokemones())
    },[dispatch])
    
    // This section renders a div with the homeStyle class. Inside this div, 
    // it renders the SearchBar and CardsContainer components.
    
    return(
        <div className={style.homeStyle}>
            <div className={style.searchbar}> 
                <SearchBar/>
            </div>
            {/* <h1>Esta es la vista de Home</h1> */}
            <CardsContainer/>
          
        </div>
    )
}

export default Home;
