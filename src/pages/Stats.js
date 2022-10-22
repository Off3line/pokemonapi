import { Badge, Box, Image, List, ListItem, Stack } from "@chakra-ui/react";
import {React,useState} from "react";
import  '../css/Style.css'

const Stats = ({stats}) => {
    return(
        <Box>
            <List>
            {stats.abilities?.map(typ => { return ( <ListItem key={typ.ability.name}>{typ.ability.name}</ListItem> ) })}
            </List>
            <Badge colorScheme='purple'>{stats.id}</Badge>
            <Badge colorScheme='purple'>{stats.height}</Badge>
            <Badge colorScheme='purple'>{stats.order}</Badge>
            <Badge colorScheme='green'>{stats.weight}</Badge>
        </Box>
         
    )
}

export default Stats;