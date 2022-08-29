import React from 'react';
import Item from './Item';

export const ItemList = ({data = []}) => {
  return (
      data.map( p => <Item key={p.id} title={p.title} price={p.price} info={p.description} image={p.images[0]}/>)
  )
}

export default ItemList