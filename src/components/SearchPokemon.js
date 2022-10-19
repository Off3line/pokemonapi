import { Button, Input } from "@chakra-ui/react";
import {React,useState} from "react";
import restService from "../services/RestService";


const SearchPokemon = ({setPok}) => {
    const [input,setInput] = useState([]);
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const searchPokemon = () => {
        restService.setPokemon(input)
            .then(result => {
                setPok(result);
            })

    }

    return(
        <div>
            <Input variant='filled' placeholder='Search Pokémon' width='auto' onChange={handleChange} />
            <Button colorScheme='teal' variant='ghost' onClick={searchPokemon} >Search</Button>
        </div>
    )
} 

export default SearchPokemon;