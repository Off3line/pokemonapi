import axios from "axios";
import React from "react";


const url = 'https://pokeapi.co/api/v2/pokemon/';
const getPokemon = () =>{
    const request = axios.get(url+"pikachu")
    return request.then( response => {return response.data})
}

const setPokemon = (poke) => {
    const pokeSmallCase = poke.toLowerCase()
    const request = axios.get(url+pokeSmallCase)
    return request.then( response => {return response.data})
}

export default {getPokemon, setPokemon};