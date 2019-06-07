import React from 'react'
import { Dropdown } from 'semantic-ui-react'

var typeOptions = [
  {
    text: 'Poison',
    value: 'poison',
  },
 {
    text: 'Water',
    value: 'water',
  },
  {
    text: 'Fire',
    value: 'fire',
  },
  {
    text: 'Flying',
    value: 'flying',
  },
  {
    text: 'Short',
    value: 'short',
  },
  {
    text: 'Mid',
    value: 'mid',
  },
  {
    text: 'Tall',
    value: 'tall',
  },
]

const DropdownExampleSelection = (props) => (
  	<Dropdown placeholder='Select Type Of Filter' fluid selection options={typeOptions} 
  		onChange = {(event, {value}) => {
    		console.log(value);
    		props.func(value);
			}
		}
	/>
)



export default DropdownExampleSelection