import React from 'react';
import Character from './Character';
import './Card.css';

const Card = props => {
  return (
    <div className="char-list">
      {props.characters.map(char => {
        return (<Character key={char.created} character={char}/>);
      })}
    </div>
  );
}

export default Card;