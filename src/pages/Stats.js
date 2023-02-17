import { Badge, Box, Grid, GridItem, Image, UnorderedList, ListItem, Spacer, Stack, Text, Flex, Tag } from "@chakra-ui/react";
import {React,useState} from "react";
import  '../css/Style.css'
import StatsValue from "./StatsValue";

const Stats = ({pokemon}) => {



    return(
        
        <Box>
            <Text fontSize='3xl'>Pokédex Data</Text>   
            <StatsValue label='Index No.' value={pokemon.id}/>    
            <StatsValue label='Height' value={pokemon.height} color='green'/>
            <StatsValue label='Weight' value={pokemon.weight} color='red'/>   
        </Box>
         
    )
}

export default Stats;