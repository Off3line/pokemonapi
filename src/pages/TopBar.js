import { Text } from "@chakra-ui/react";
import React from "react";

const TopBar = ({pokemon}) => {

    console.log(pokemon,'TopBar');
    return(
        <div>
          <Text fontSize='3xl'>Name: {pokemon.name}</Text>
        </div>
    )
}

export default TopBar;