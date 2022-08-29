import React from 'react'

const Item = ({title, image, info, price}) => {
  return (
    <div className='boxItem'>
        <h2 className='titleItem'> {title}</h2>
        <img className='imgItem' src={image} alt={title}/>
        <p className='infoItem'> {info}</p>
        <p className='priceItem'> Price: ${price}</p>
    </div>
  )
}
export default Item