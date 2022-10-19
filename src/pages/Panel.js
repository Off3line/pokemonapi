import React, {useEffect,useState} from "react";
import restService from "../services/RestService";
import Stats from "./Stats";
import TopBar from "./TopBar";


const Panel = () => {
    const [foundpokemon,setpokemon] = useState([]);

    useEffect(() => {
        restService.getPokemon()
        .then(result => {setpokemon(result)})
    },[])
    

    return(
        <div>
            <TopBar pokemon={foundpokemon}/>
            <Stats stats={foundpokemon}/>
            <p>Hello World!</p>
        </div>
    );

}

export default Panel;