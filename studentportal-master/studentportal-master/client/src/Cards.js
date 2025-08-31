import React from 'react';
import './cards.css'; // Import a CSS file for styling

const cardData = [
  {
    id: 1,
    image: 'https://placekitten.com/200/300', // Replace with your image URL
    description: 'Card 1 Description',
    link: 'https://example.com/card1',
  },
  {
    id: 2,
    image: 'https://placekitten.com/201/300', // Replace with your image URL
    description: 'Card 2 Description',
    link: 'https://example.com/card2',
  },
  {
    id: 3,
    image: 'https://placekitten.com/202/300', // Replace with your image URL
    description: 'Card 3 Description',
    link: 'https://example.com/card3',
  },
];

const HorizontalCard = ({ data }) => (
  <div className="card">
    <img src={data.image} alt={data.description} />
    <div className="card-content">
      <p>{data.description}</p>
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  </div>
);

const CardList = () => (
  <div className="card-list">
    {cardData.map((card) => (
      <HorizontalCard key={card.id} data={card} />
    ))}
  </div>
);

export default CardList;
