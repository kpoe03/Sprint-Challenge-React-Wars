import React from 'react';
import Header from './Header';
import Card from './Card';

const Character = props => {
    return (
        <div className = "character" >
        <Header header = {props.header} />
        <Card birthYear = {props.birthYear} 
                    eyeColor = {props.eyeColor}
                    hair = {props.hair}
                    height = {props.height}
                    mass = {props.mass}
                    />
        </div>
    )
}

export default Character; 