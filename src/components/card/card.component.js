import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt={props.codefriend.name} src={props.codefriend.avatar_url} />
        <h2>{props.codefriend.name}</h2>
        <a href={props.codefriend.html_url}
            target='_blank'
            rel="noopener noreferrer"
        >{props.codefriend.login}</a>
    </div>
);