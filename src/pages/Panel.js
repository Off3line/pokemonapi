import React, {useEffect,useState} from "react";
import { Button, Container, Grid, GridItem, HStack, Img, Input, VStack } from "@chakra-ui/react";
import Stats from "./Stats";
import TopBar from "./TopBar";
import SearchPokemon from "../components/SearchPokemon";
import Sprite from "../components/Sprite";



const Panel = () => {
    const [currentPokemon,setCurrentPokemon] = useState([]);
        
    

    return(
        <Grid h='200px'w='400px' templateColumns='repeat(2,1fr)' templateRows='repeat(3,1fr)'>
            <GridItem colSpan={2}>
            <TopBar pokemon={currentPokemon}/>
            </GridItem>
            <GridItem colSpan={1}>
            <Sprite sprite={currentPokemon}/>
            </GridItem>
            <GridItem colSpan={1}>
            <Stats stats={currentPokemon}/>
            </GridItem>
            <GridItem colSpan={2}>
            <SearchPokemon setPok={setCurrentPokemon}/>
            </GridItem>
        </Grid>
    );

}

export default Panel;