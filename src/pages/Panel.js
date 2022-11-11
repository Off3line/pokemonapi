import React, {useEffect,useState} from "react";
import { Box, Button, Container, Flex, Grid, GridItem, HStack, Img, Input, Spacer, Stack, VStack } from "@chakra-ui/react";
import Stats from "./Stats";
import TopBar from "./TopBar";
import SearchPokemon from "../components/SearchPokemon";
import Sprite from "../components/Sprite";



const Panel = () => {
    const [currentPokemon,setCurrentPokemon] = useState([]);
        
    

    return(
        <Box shadow='md' borderwith='1px'p={5} borderRadius='lg'>
            <TopBar pokemon={currentPokemon}/>
            <HStack>
                <Sprite sprite={currentPokemon}/>
                <Spacer/>
                <Stats stats={currentPokemon} />
            </HStack>
            <SearchPokemon setPok={setCurrentPokemon}/>
        </Box>
       
    );

}

export default Panel;