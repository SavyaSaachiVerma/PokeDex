import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';

function PokeRow(props){
	return(
		<List.Item onClick={() => props.handleOnClick(props.poke.id)}>
      		<Image avatar src={props.poke.sprite}/>
      		<List.Content>
        		<List.Header>{props.poke.name}</List.Header>
      		</List.Content>
    	</List.Item>
	);
}

export default PokeRow;