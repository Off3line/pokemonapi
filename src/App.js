import logo from './logo.svg';
import Panel from "./pages/Panel";
import RestService from "./services/RestService";
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {

return  (
    
     <ChakraProvider>
        <Panel/>
     </ChakraProvider>
)
}

export default App