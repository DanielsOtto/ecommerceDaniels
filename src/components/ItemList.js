import React from 'react';
import Item from './Item';

const ItemList = ({data}) => {
  return (
      data.map( item => <Item key={item.id} {...item} />)
  )
}

export default ItemList