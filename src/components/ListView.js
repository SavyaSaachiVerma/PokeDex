import React, { Component } from 'react';
import './styles/ListView.css';
import { Image, List } from 'semantic-ui-react';
import PokeRow from './PokeRow'

function listView(props){
	const cells = props.pokemons.map(pokemon => {
		return(
    		<PokeRow
    			key = {pokemon.id} 
  				poke = {pokemon}
  				handleOnClick = {props.handleOnClick} 
    		/>
  		);
	});

	return (
    <section className = 'list-view'>
    	<List animated verticalAlign='middle'>
    	{cells}
    	</List>
    </section>
  )
}

export default listView;