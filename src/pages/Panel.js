import React, {useEffect} from "react";
import restService from "../services/RestService";

const Panel = () => {
    console.log('Hello from component');
    useEffect(() => {
        restService.getPokemon()
            .then(result => {
                console.log('pikachu',result)
            })
    })


    return(
        <div>
            <p>Hello World!</p>
        </div>
    );

}

export default Panel;