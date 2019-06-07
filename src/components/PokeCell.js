import React, { Component } from 'react';
import './styles/PokeCell.css';

function PokeCell(props) {

	return(
		<div class="card" onClick={() => props.handleOnClick(props.poke.id)}>
			<img src={props.poke.sprite} alt="Avatar" />
  			<div class="container">
    			<h4><b>{props.poke.name}</b></h4> 
  			</div>
		</div>
	);
}
		

export default PokeCell;