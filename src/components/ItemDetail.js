import React from 'react';
import ItemCount from './ItemCount';

const MasInforacion = ({ stock, titulo, img, alt, descripcion, precio, escritor, paginas }) => {
  return (
    <div className='box-detail'>
      <img src={process.env.PUBLIC_URL + img} alt={alt} />
      <div className='box-info'>
        <h2>{titulo}</h2>
        <h4>{escritor}</h4>
        <p>{descripcion}</p>
        <p className='price'>ar$ {precio}</p>
        <div className='box-info__buy'>
          <p className='pages'>páginas: {paginas}</p>
          <ItemCount stock={stock} initial={0} />
        </div>
      </div>
      {/* boton volver */}
    </div>
  )
}

export default MasInforacion