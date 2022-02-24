import React from "react";
import './pokecard.css'


const PokeCard = (props) => {
    const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className = 'pokeCard'>
            <h3>{props.name}</h3>
            <img src = {pokeImg}  alt = {props.name} />
            <h6>Type : {props.type}</h6>
            <h6>EXP : {props.exp}</h6>

        </div>
    )
}

export default PokeCard;