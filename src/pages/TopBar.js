import { Box, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const TopBar = ({pokemon}) => {

    console.log(pokemon,'bar');
    return(
        <div>
          <Text fontSize='4xl'>Name: {pokemon.name}</Text>
        </div>
    )
}

export default TopBar;