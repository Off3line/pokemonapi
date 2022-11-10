import { Badge, Box, Grid, GridItem, Image, List, ListItem, Spacer, Stack, Text, Flex, Tag } from "@chakra-ui/react";
import {React,useState} from "react";
import  '../css/Style.css'

const Stats = ({stats}) => {
    return(
        
        <Box>
            
            <Text fontSize='3xl'>Pokédex Data</Text>   
            <Box w='150px'>
            <Flex minWidth='max-content'> 
            <Text fontSize='sm'>Index No.</Text>
            <Spacer/>
            <Tag colorScheme='purple'>{stats.id}</Tag>
            </Flex>
           
            </Box>
            
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