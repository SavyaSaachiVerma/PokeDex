import React from 'react'
import { Image, List } from 'semantic-ui-react'

const ListExampleAnimated = ({pokemon}) => (
  <List animated verticalAlign='middle'>
    <List.Item >
      <Image avatar src={pokemon.sprite}/>
      <List.Content>
        <List.Header>{pokemon.name}</List.Header>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleAnimated