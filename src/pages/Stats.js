import { Badge, Box, Grid, GridItem, Image, List, ListItem, Spacer, Stack, Text, Flex, Tag } from "@chakra-ui/react";
import {React,useState} from "react";
import  '../css/Style.css'
import StatsValue from "./StatsValue";

const Stats = ({stats}) => {



    return(
        
        <Box>
            <Text fontSize='3xl'>Pokédex Data</Text>   
            <StatsValue label='Index No.' value={stats.id}/>    
            <StatsValue label='Height' value={stats.height} color='green'/>
            <StatsValue label='Weight' value={stats.weight} color='red'/>
            {/**
             *  <List>
            {stats.abilities?.map(typ => { return ( <ListItem key={typ.ability.name}>{typ.ability.name}</ListItem> ) })}
            </List>
             * 
             */}
           
        </Box>
         
    )
}

export default Stats;