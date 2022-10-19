import { Box, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const TopBar = ({pokemon}) => {

    console.log(pokemon,'bar');
    return(
        <div>
          <Text fontSize='3xl'>Name: {pokemon.name}</Text>
          <div>
            <List>
            {pokemon.abilities?.map(typ => { return ( <ListItem key={typ.ability.name}>{typ.ability.name}</ListItem> ) })}
            </List>
          
            </div>
        </div>
    )
}

export default TopBar;