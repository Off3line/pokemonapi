import logo from './logo.svg';
import Panel from "./pages/Panel";
import RestService from "./services/RestService";
import { ChakraProvider, Img, Flex, HStack, LightMode } from '@chakra-ui/react';
import logopokemon from './assets/pokemon_logo.png';
import Display from './pages/Display';
import { useEffect, useState } from 'react';



const App = () => {
     const [counter,setCounter] = useState(1)
     const [panels, setPanels] = useState([{id: 0, name:'pippo'}]); 

     function add(){
               setPanels((panels) => [...panels,{id: counter, name:'luci'}])
               setCounter(counter + 1)
     }
     function rem(remId){
          let newPanelArray = panels.filter( panel => panel.id !== remId)
          setPanels(newPanelArray)
     }


return  (
    
     <ChakraProvider>
       <Img src={logopokemon} alt='pokemon logo' width='400px'/>
          <HStack justify='center' spacing={8}>
               {panels.map((item) =>(<Display addPanel={add} removePanel={(e) => rem(item.id)} key={item.id}/>))}
          </HStack>
     </ChakraProvider>
)
}

export default App