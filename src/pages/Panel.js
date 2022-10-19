import React, {useEffect,useState} from "react";
import SearchField from "../components/SearchPokemon";
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
            <SearchField/>
        </div>
    );

}

export default Panel;