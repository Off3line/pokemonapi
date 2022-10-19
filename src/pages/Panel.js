import React, {useEffect,useState} from "react";
import { Button, Input } from "@chakra-ui/react";
import restService from "../services/RestService";
import Stats from "./Stats";
import TopBar from "./TopBar";
import SearchPokemon from "../components/SearchPokemon";


const Panel = () => {
    const [currentPokemon,setCurrentPokemon] = useState([]);
        
    

    return(
        <div>
            <TopBar pokemon={currentPokemon}/>
            <Stats stats={currentPokemon}/>
            <SearchPokemon setPok={setCurrentPokemon}/>
        </div>
    );

}

export default Panel;