import logo from './logo.svg';
import Panel from "./pages/Panel";
import RestService from "./services/RestService";
import { ChakraProvider, Img } from '@chakra-ui/react';
import logopokemon from './assets/pokemon_logo.png';



const App = () => {

return  (
    
     <ChakraProvider>
       <Img src={logopokemon} alt='pokemon logo' width='400px' />
        <Panel/>
     </ChakraProvider>
)
}

export default App