import React from 'react';
// import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ alt, precio, escritor, titulo, id,stock, img }) => {
  return (
    <div className='boxItem'>
      <div className='boxTitle'>
        <h2 className='titleItem'> {titulo}</h2>
        <p className='marcaItem'>{escritor}</p>
      </div>
      <img className='imgItem' src={process.env.PUBLIC_URL + img} alt={alt}/>
      <div>
        {/* <ItemDetail stock={stock} info={descripcion} img={img} alt={alt} /> */}

        {/* <button>
          <Link to={`/detalle/${id}`}>
              mas información
          </Link>
        </button> */}
        
        <ItemCount stock={stock} initial={0}/>
        <p className='priceItem'> ar$ {precio}</p>
      </div>
    </div>
  )
}
export default Item