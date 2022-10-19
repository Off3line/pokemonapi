import axios from "axios";
import React from "react";


const url = 'https://pokeapi.co/api/v2/pokemon/';
const getPokemon = () =>{
    const request = axios.get(url+"pikachu")
    return request.then( response => {return response.data})
}

const setPokemon = (poke) => {
    const request = axios.get(url+poke)
    return request.then( response => {return response.data})
}

export default {getPokemon, setPokemon};