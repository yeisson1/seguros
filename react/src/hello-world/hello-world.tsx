import React from 'react'; 
import HelloWorldStyle from './hello-world.css';

const HelloWorld = () => {
    /**
     * AQUÍ TODO LO VISUAL, SOLO LLAMAR PROPS Y YA
     */
    return (<div className={HelloWorldStyle.init}>Hola Mundo &#9996;</div>)
} 

export default HelloWorld;

