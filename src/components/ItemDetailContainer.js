import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import losLibros from '../losLibros.json';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {

    const [book, setBook] = useState({});
    const { detailId } = useParams();
    useEffect(() => {
        const getBook = new Promise((resolve, rejected) => {
            setTimeout(() => {
                losLibros ? resolve(losLibros) : rejected("Error");
            }, 1500);
        });

        getBook
            .then(detailId && (res => setBook(res.find(bk => bk.id === detailId))))
            .catch(err => console.log(`${err}: No hay nada para vender.`));
    }, [detailId])

    return (
        <section>
            { Object.entries(book).length === 0 ? 
                <div className='ubicarSpinner'>  <div className='spinner'></div>   </div>
            :
               <ItemDetail {...book} />
            }
        </section>
    )
}
