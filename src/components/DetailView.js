import React from 'react';
import './styles/DetailView.css';

const DetailView = (props) => {
	const {pokemon, handleOnClick} = props
	const { id, name, sprite, type, height } = pokemon;
  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' />
      <div className='data-wrapper'>
        <h1 className='data-name'>Name : {name}</h1>
        <h1 className='data-name'>ID: {id}</h1>
        <h1 className="data-name">Type: {type} </h1>
        <h1 className="data-name">Height: {height} </h1>
      </div>
      <button className = "button" onClick = {() => handleOnClick(id, - 1)} > Previous </button>
      <button className = "button" onClick = {() => handleOnClick(id, 1)} > Next </button>
    </section>
  )
}

export default DetailView;