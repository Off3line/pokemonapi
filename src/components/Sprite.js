import { Box, Image } from "@chakra-ui/react";



const Sprite = ({sprite}) =>{

    let spriteUrl = sprite?.sprites?.front_default;

    return(
        <Box>
            <Image src={spriteUrl} alt='pokemon sprite' fallbackSrc='https://via.placeholder.com/100'/>
        </Box>
    )
}

export default Sprite;