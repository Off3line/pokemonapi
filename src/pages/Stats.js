import { Badge, Box, Grid, GridItem, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";
import {React,useState} from "react";
import  '../css/Style.css'

const Stats = ({stats}) => {
    return(
        
        <Box>
             <Text fontSize='3xl'>Pokédex Data</Text>   
            <Grid templateColumns='repeat(2, 1fr)' gap={1}>
                <GridItem h='5'>
                <Text fontSize='sm'>Index No.</Text>
                </GridItem>
                <GridItem h='5'>
                <Badge colorScheme='purple'>{stats.id}</Badge>
                </GridItem>

            </Grid>
           
            <List>
            {stats.abilities?.map(typ => { return ( <ListItem key={typ.ability.name}>{typ.ability.name}</ListItem> ) })}
            </List>
            <Badge colorScheme='red'>{}</Badge>
            <Badge colorScheme='purple'>{stats.id}</Badge>
            <Badge colorScheme='purple'>{stats.height}</Badge>
            <Badge colorScheme='purple'>{stats.order}</Badge>
            <Badge colorScheme='green'>{stats.weight}</Badge>
        </Box>
         
    )
}

export default Stats;