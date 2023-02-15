import { ButtonGroup, IconButton, Stack, useBoolean, VStack } from "@chakra-ui/react";
import { AddIcon,MinusIcon } from '@chakra-ui/icons'
import { useState } from "react";


export default function AddIconButton({handleAddClickEvent,handleRemoveClickEvent, id}) {
    

    const stackStyles = {
        direction:'column',
     

    }

    const buttonStyle = {
        my: {base: 1, md: 2, lg: 50},
    }

    return (
        <Stack sx={stackStyles}>
        <IconButton aria-label="add search field" icon={<AddIcon/>} onClick={handleAddClickEvent} sx={buttonStyle} id={id} size={{base: 'md' , lg: 'lg'}}/>
        <IconButton aria-label="remove search field" icon={<MinusIcon/>} onClick={handleRemoveClickEvent} sx={buttonStyle} size={{base: 'md' , lg: 'lg'}}/>
        </Stack>
       
    );
}
