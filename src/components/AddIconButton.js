import { ButtonGroup, IconButton, Stack, useBoolean, VStack } from "@chakra-ui/react";
import { AddIcon,MinusIcon } from '@chakra-ui/icons'
import { useState } from "react";


function AddIconButton({handleAddClickEvent,handleRemoveClickEvent, id}) {
    

    return (
        <Stack direction='column'>
        <IconButton aria-label="add search field" icon={<AddIcon/>} onClick={handleAddClickEvent} id={id}/>
        <IconButton aria-label="remove search field" icon={<MinusIcon/>} onClick={handleRemoveClickEvent}/>
        </Stack>
       
    );
}







export default AddIconButton;