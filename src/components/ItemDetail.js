import React from 'react'
import ItemCount from './ItemCount'

const MasInforacion = ({stock, info, img, alt})=> {
  return (
    <button>
        <img src={process.env.PUBLIC_URL + img} alt={alt}/>
        <ItemCount stock={stock} initial={1} />
        <p>{info}</p>
        {/* boton volver */}
    </button>
  )
}

export default MasInforacion