import React from 'react';

const Hero = ({hero, toggleImportant, deleteHero}) => {
    const label = hero.important ? "Remove important" : "Add important";
    return ( 
        <li>
            {hero.name} 
            <button onClick={toggleImportant}>{label}</button>
            <button onClick={deleteHero}>Delete</button>
        </li>
     );
}
 
export default Hero;