import { Box, HStack, Image, Wrap } from "@chakra-ui/react";
import {Rive,RiveComponent} from "@rive-app/react-canvas";
import Display from "../pages/Display";
import Simple from "./Simple";
import NoPanel from "./NoPanel";

const PanelDisplay = ({panels,add,rem}) => {

    if(panels.length == 0)
    {
         return <NoPanel add={add}/>
    }
    return (
        
         <HStack justify='center' spacing={8}>
            {panels.map((item) => <Display addPanel={add} removePanel={(e) => rem(item.id)} key={item.id}/>)}
        </HStack>

    
    ) 
         

}

export default PanelDisplay;