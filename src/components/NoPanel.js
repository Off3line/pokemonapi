import { Box, Image,Button, VStack,Text } from "@chakra-ui/react";
import logopokemon from '../assets/pikachu-running.gif';


const NoPanel = ({add}) =>{

    const handleClick = add

    return (
        <VStack justify='center' spacing={0}>
        <Box w={[300,400,500]}>
        <Image src={logopokemon} w='50%'/>
        <Text fontSize='30px' color='black'>
        Whoops! There are no more panels.. Try adding a few by clicking on the button below!
        </Text>
        <Button onClick={handleClick} colorScheme='teal' variant='outline' size='lg'>Add Panel</Button>
        </Box>
        </VStack>
       
    )
}

export default NoPanel;