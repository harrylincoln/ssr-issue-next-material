import React from 'react';
import Card from '../card/index';

export default () => {
    // UK-UK-GBP
    const cardsArray = [
        {
            image: '',
            id: 'id-1',
        },
        {
            image: '',
            id: 'id-2',
        },
    ];

    const cards = () => cardsArray.map((data) => <Card key={data.id} />);

    return (
        <div className="Card-deck" layout-fill-width="">
            {cards()}
        </div>
    );
};
