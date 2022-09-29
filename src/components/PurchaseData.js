import React from 'react';

const PurchaseData = ({ buyer, date, finalPrice, items }) => {


  return (
      <article className='buyerInfo-box'>
        <div className='buyerInfo-details'>
          <h2>datos del comprador</h2>
          <p><span>nombre y apellido:</span> {buyer.name}</p>
          <p><span>correo:</span> {buyer.email}</p>
          <p><span>teléfono:</span> {buyer.phone}</p>
        </div>
        <div className='purchaseInfo-details'>
          <h3>detalle de la compra</h3>
          <h4>variedades de libros solicitados: {items.length}</h4>
          {items.map(book =>
            <div key={book.id} className='books-box'>
              <p><span>titulo:</span> {book.title}</p>
              <p><span>id:</span> {book.id}</p>
              <p><span>precio:</span> {book.price}</p>
            </div>
          )}
        </div>
        <div className='purchaseInfo-date__price'>
          <p><span>fecha:</span> {date}</p>
          <p><span>precio total:</span> {finalPrice}</p>
        </div>
      </article>
  )
}

export default PurchaseData

