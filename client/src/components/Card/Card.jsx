// This is the Card component. 
// It receives props and displays information about a Pokémon.

import style from "./Card.module.css";
import {Link} from "react-router-dom";

const Card = (props) => {

    let creado = 'true' ; 

    if (props.created === true ){
        creado = 'true'
    } else {
        creado = 'false'
    }

    return(
        
        // This section renders the Card component. 
        // It displays the Pokémon’s name, image, types, attack, and 
        // whether it was created or not.
        
        <div className={style.card}  >
            <Link to={`/detail/${props.id}`}>
                <h1 className={style.heading}>{props.name}</h1> 
                <img src={props.image} alt='' style={{ width: '100px', height: '100px' }} />          
                <p>Tipos:  {props.types.join(', ')}</p>
                <p>Ataque: {props.attack}</p>
                <p>Creado: {creado}</p>
            </Link>    
        </div>
    )
}

export default Card;
