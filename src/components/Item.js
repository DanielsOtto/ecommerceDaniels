import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ alt, precio, escritor, titulo, id, img }) => {
  return (
    <div className='boxItem'>
      <div className='boxTitle'>
        <h2 className='titleItem'> {titulo}</h2>
        <p className='marcaItem'>{escritor}</p>
      </div>
      <img className='imgItem' src={process.env.PUBLIC_URL + img} alt={alt}/>
      <div className="boxItem__pab">
        <p className='priceItem'> ar$ {precio}</p>
        <button className='btn-detail'>
          <Link className="btn-link" to={`/detalle/${id}`}>
              mas información
          </Link>
        </button>
      </div>
    </div>
  )
}
export default Item