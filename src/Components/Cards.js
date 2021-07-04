import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Vacation Images Around the World</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Escape From Your Problems There Is More To See'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Japan With Your Loved Ones'
              path='/services'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Beautiful Hotels With The Best Accomodations'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Sail in a Boat through the Uncharted Waters of Bali '
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience The World With Your Loved Ones on Top of the Himilayan Mountains'
              path='/projects'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Mountains usually have steep, sloping sides and sharp or slightly rounded ridges and peaks'
              path='/contact-us'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
