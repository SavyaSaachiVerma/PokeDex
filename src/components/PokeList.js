import React, { Component } from 'react';
import './styles/PokeList.css';
import PokeCell from './PokeCell'

function PokeList(props){
  const cells = props.pokemons.map(pokemon => {
  	return(
  		<PokeCell 
  			key = {pokemon.id} 
  			poke = {pokemon}
  			handleOnClick = {props.handleOnClick}
  		/>
  	);
  });

  return (
    <section className="poke-list">
    	{cells}
    </section>
  )
}





export default PokeList;