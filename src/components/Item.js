import React from 'react';


const Item = ({ alt, precio, escritor, titulo, stock, descripcion, img }) => {

  return (
    <div className='boxItem'>
      <div className='boxTitle'>
        <h2 className='titleItem'> {titulo}</h2>
        <p className='marcaItem'>{escritor}</p>
      </div>
      <img className='imgItem' src={process.env.PUBLIC_URL + img} alt={alt}/>
      <div>
        {/* <ItemDetail stock={stock} info={descripcion} img={img} alt={alt} /> */}
        <p className='priceItem'> Price: ${precio}</p>
      </div>
    </div>
  )
}
export default Item