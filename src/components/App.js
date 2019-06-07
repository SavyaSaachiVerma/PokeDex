import React, { Component } from 'react';
import './styles/App.css';
import Pokemon from '../Pokemon';
import PokeList from './PokeList';
import ListView from './ListView';
import DetailView from './DetailView';
import DropdownExampleSelection from './DropdownExampleSelection';
import DropdownSort from './DropdownSort'
import axios from 'axios';
import Search from './search'

var counter = 0;
class App extends Component {
  constructor(){
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClickNextPrev = this.handleOnClickNextPrev.bind(this);
    this.filterByType = this.filterByType.bind(this);
    this.sortFunc = this.sortFunc.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
    this.state = {
      users : [],
      data : [],
      pokemon : {},
      view: {}
    }
  }
  handleOnClick(id) {

    for(var i = 0; i < this.state.users.length; i++){
      if(this.state.users[i].id == id){
          this.setState({pokemon: this.state.users[i]});
      }
    }
    console.log(id);
  }
   handleOnClickNextPrev(id, iter) {
    if(iter == -1){
      for(var i = 0; i < this.state.users.length; i++){
        if(this.state.users[i].id == id){
          this.setState({pokemon: this.state.users[i - 1]});
        }
      }
    }
    else{
      for(var i = 0; i < this.state.users.length; i++){
        if(this.state.users[i].id == id){
          this.setState({pokemon: this.state.users[i + 1]});
        }
      }
    }
    console.log(id);
  }

  changeView(){
    if (counter%2 == 0){
      this.setState({view: "gallery"})
    }
    else{
      this.setState({view: "list"})
    }
    counter += 1
    console.log(counter)
  }
  filterByType(type){
    var list = []
     if (type == "short"){
        for (var i=0; i<151; i++){
            if(this.state.data[i].height <= 7)
                list.push(this.state.data[i])
        }
    }
    else if (type == "mid"){
        for (var i=0; i<151; i++){
            if(this.state.data[i].height >= 7 && this.state.data[i].height < 13)
                list.push(this.state.data[i])
        }
    }
    else if (type == "tall"){
        for (var i=0; i<151; i++){
            if(this.state.data[i].height >= 13)
                list.push(this.state.data[i])
        }
    }
    else{
        for (var i=0; i<151; i++){
          if(this.state.data[i].type == type)
            list.push(this.state.data[i])
        }
    }
    this.setState({users:list})
  }
  compareA(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
 compareD(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  let comparison = 0;
  if (nameA > nameB) {
    comparison = -1;
  } else if (nameA < nameB) {
    comparison = 1;
  }
  return comparison;
}
compareHA(a, b) {
  const heightA = Number(a.height);
  const heightB = Number(b.height);
  
  return heightA - heightB;
}
compareHD(a, b) {
  const heightA = Number(a.height);
  const heightB = Number(b.height);
  console.log(typeof heightA)
  console.log(typeof heightB)
  
  return heightB - heightA;
}
  sortFunc(type){
    var list = this.state.users;
    if (type == "NAOA"){
        list.sort(this.compareA);
    }
    if (type == "NAOD"){
        list.sort(this.compareD);
    }
    if (type == "HOA"){
       list.sort(this.compareHA);
    }
    if (type == "HOD"){
        list.sort(this.compareHD);
    }
    this.setState({users:list})
  }
  updateUsers(list){
    this.setState({users: list})
  }
  componentWillMount() {
    var pokemons = []
    var urls = []
    for (var idx = 1; idx <= 151; idx++){
      var json = axios.get('https://pokeapi.co/api/v2/pokemon/' + idx + '/');
      urls.push(json);
    } 
    axios.all(urls).then(res => {
      res.forEach(json => {
        var pokemon = new Pokemon(json.data);
        pokemons.push(pokemon)
      })
    }).then(() => this.setState({data: pokemons, users: pokemons}));
  }
  render() {
      if(counter % 2 == 0){
        return(
        <div className="App">
          <div className="containerT">
            <Search store = {this.state.data} updateUsers = {this.updateUsers} /> 
            <DropdownExampleSelection func = {this.filterByType} />
            <DropdownSort func = {this.sortFunc} />
            <button className = "button" onClick = {() => this.changeView()} > Click to Change View </button>
          </div>
          <PokeList pokemons = {this.state.users} handleOnClick = {this.handleOnClick}/>
          <DetailView pokemon = {this.state.pokemon} handleOnClick = {this.handleOnClickNextPrev}/>
        </div>
        );
      }
      else{
        return(
        <div className="App">
          <div className="containerT">
            <Search store = {this.state.data} updateUsers = {this.updateUsers} /> 
            <DropdownExampleSelection func = {this.filterByType} />
            <DropdownSort func = {this.sortFunc} />
            <button className = "button" onClick = {() => this.changeView()} > Click to Change View </button>
          </div>
          <ListView pokemons = {this.state.users} handleOnClick = {this.handleOnClick}/>
          <DetailView pokemon = {this.state.pokemon} handleOnClick = {this.handleOnClickNextPrev}/>
        </div>
        );
      }
  }

}




export default App;
