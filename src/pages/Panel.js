import { Text } from "@chakra-ui/react";
import React, {useEffect} from "react";
import restService from "../services/RestService";
const Panel = () => {
    console.log('Hello from component');



    return(
        <div>
            <Text fontSize='6xl'>Chakra UI</Text>
            <p>Hello World!</p>
        </div>
    );

}

export default Panel;