import { HStack } from "@chakra-ui/react";
import { useState } from "react";
import AddIconButton from "../components/AddIconButton";
import Panel from "./Panel";



const Display = ({addPanel,removePanel, id}) => {
   
  
   



    return(
    
        <HStack>
        <Panel/>
        <AddIconButton handleAddClickEvent={addPanel} handleRemoveClickEvent={removePanel} id={id} />
        </HStack>
    
    )
}



export default Display;