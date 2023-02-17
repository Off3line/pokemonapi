import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import PanelDisplay from './components/PanelDisplay';


const App = () => {
     const [counter,setCounter] = useState(1)
     const [panels, setPanels] = useState([{id: 0}]); 
     const  add =() => {
               setPanels((panels) => [...panels,{id: counter}])
               setCounter(counter + 1)
               console.log(panels)
     }
     const rem = (remId) => {
          let newPanelArray = panels.filter( panel => panel.id !== remId)
          setPanels(newPanelArray)
     }

     
     

return  (
     <ChakraProvider>
          <PanelDisplay panels={panels} add={add} rem={rem} />
     </ChakraProvider>
     )
}




export default App;