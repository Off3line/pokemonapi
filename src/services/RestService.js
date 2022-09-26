import axios from "axios";
import React from "react";


const getPokemon = () =>{
    const request = axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    return request.then( response => {return response.data})
}

export default {getPokemon}