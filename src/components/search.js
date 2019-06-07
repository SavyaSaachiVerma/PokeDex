
import _ from 'lodash'
import React, { Component } from 'react'
import './styles/search.css';
import { Icon } from 'semantic-ui-react'

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  render() {
    return (
        <div className="cont">
        <Icon  name="search" size="big" />
        <input type="text" value = {this.state.value} onChange={this.updateSearch.bind(this)} />
        </div>
      );
  }
  updateSearch(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
    const re = new RegExp(_.escapeRegExp(event.target.value.toLowerCase()), 'i')
    let filteredContacts = this.props.store.filter((pokemon) => {
      return re.test(pokemon.name.toLowerCase());
    })
    this.props.updateUsers(filteredContacts);
  }
}

 