import { Box, Button, Container as div, Input } from "@chakra-ui/react";
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
/** maybe remove the input and button to abstract the components away from logic.. */
    return(
        <div bg='tomato' width='100%'> 
            <Input variant='filled' placeholder='Search Pokémon' width='auto' onChange={handleChange} size='lg' />
            <Button colorScheme='teal' variant='ghost' onClick={searchPokemon} size='lg'>Search</Button>
        </div>
    )
} 

export default SearchPokemon;