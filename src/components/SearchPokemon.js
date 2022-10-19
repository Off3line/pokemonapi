import { Button, Input } from "@chakra-ui/react";
import {React,useState} from "react";


const SearchField = () => {
    const [pokemon, setPokemon] = useState('');
    
    const handleChange = (event) => {
        setPokemon(event.target.value)
    }
    const searchPokemon = () => {
        console.log(pokemon,'typed');

    }

    return(
        <div>
            <Input variant='filled' placeholder='Search Pokémon' width='auto' onChange={handleChange} />
            <Button colorScheme='teal' variant='ghost' onClick={searchPokemon} value={pokemon} >Search</Button>
        </div>
    )
}


export default SearchField;