import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {
            props.codefriends.map(codefriend =>
                (<Card key={codefriend.id} codefriend={codefriend} />)
            )
        }
    </div>
);