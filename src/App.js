import { ChakraProvider, Img, Flex, HStack, LightMode } from '@chakra-ui/react';
import logopokemon from './assets/pokemon_logo.png';
import Display from './pages/Display';
import { useEffect, useState } from 'react';
import {useRive,RiveComponent} from '@rive-app/react-canvas';
import AddIconButton from './components/AddIconButton';
import Rive from '@rive-app/react-canvas';



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

export default function Simple() {
     const { rive, RiveComponent } = useRive({
       src: 'https://cdn.rive.app/animations/vehicles.riv',
       autoplay: false,
     });

const PanelDisplay = ({panels,add,rem}) => {



          if(panels.length == 0)
          {
               return (
                    <RiveComponent className="foo" aria-label="Label" />
                   )
          }
          return (
          <HStack justify='center' spacing={8}>
          {panels.map((item) => <Display addPanel={add} removePanel={(e) => rem(item.id)} key={item.id}/>)}
          </HStack>
          ) 
               

}


export default App;