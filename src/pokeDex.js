import React from "react";

import PokeCard from "./pokecard";
import './pokeDex.css'

function PokeDex (props) {
    return (
        <div className = 'Pokedex'>
            {props.pokemon.map(p => (
                <PokeCard id = {p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
        </div>
    )
}
export default PokeDex;