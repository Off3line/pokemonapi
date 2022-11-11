import logo from './logo.svg';
import Panel from "./pages/Panel";
import RestService from "./services/RestService";
import { ChakraProvider, Img, Flex, HStack } from '@chakra-ui/react';
import logopokemon from './assets/pokemon_logo.png';
import Display from './pages/Display';
import { useState } from 'react';



const App = () => {


     const [id,setId] = useState(1);
     const [panels, setPanels] = useState([<Display addPanel={add} removePanel={rem} id={0}/>]); 
     console.log(panels);

     function add(event){
          setId(id+1)
          setPanels([...panels,<Display addPanel={add} removePanel={rem} id={id}/>])
          console.log(panels);
     }
     function rem(){
          

     }


    
return  (
    
     <ChakraProvider>
       <Img src={logopokemon} alt='pokemon logo' width='400px'/>
          <HStack justify='center' spacing={8}>
               {panels.map((item, i) =>(<Display addPanel={add} removePanel={rem} key={i}/>))}
          </HStack>
     </ChakraProvider>
)
}

export default App