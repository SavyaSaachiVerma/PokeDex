import React from 'react'
import { Dropdown } from 'semantic-ui-react'

var sortOptions = [
  {
    text: 'Name Alphabetical Order Ascending',
    value: 'NAOA',
  },
 {
    text: 'Name Alphabetical Order Descending',
    value: 'NAOD',
  },
  {
    text: 'Height Order Ascending',
    value: 'HOA',
  },
  {
    text: 'Height Order Descending',
    value: 'HOD',
  },
]

const DropdownSort = (props) => (
  	<Dropdown placeholder='Select Property To Sort By' fluid selection options={sortOptions} 
  		onChange = {(event, {value}) => {
    		console.log(value);
    		props.func(value);
			}
		}
	/>
)



export default DropdownSort