import { ChakraProvider, Img, Flex, HStack, LightMode } from '@chakra-ui/react';
import logopokemon from './assets/pokemon_logo.png';
import { useEffect, useState } from 'react';
import {useRive,RiveComponent} from '@rive-app/react-canvas';
import AddIconButton from './components/AddIconButton';
import Rive from '@rive-app/react-canvas';
import PanelDisplay from './components/PanelDisplay';


const App = () => {
     const [counter,setCounter] = useState(1)
     const [panels, setPanels] = useState([{id: 0}]); 
     function add(){
               setPanels((panels) => [...panels,{id: counter}])
               setCounter(counter + 1)
               console.log(panels)
     }
     function rem(remId){
          let newPanelArray = panels.filter( panel => panel.id !== remId)
          setPanels(newPanelArray)
     }

     
     

return  (
     <ChakraProvider>
       
          <div>
              <PanelDisplay panels={panels} add={add} rem={rem} />
          </div>
     </ChakraProvider>
     )
}




export default App;