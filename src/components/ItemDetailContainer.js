import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import losLibros from '../losLibros.json';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {

    const [books, setBooks] = useState([]);
    const { detailId } = useParams();

    useEffect(() => {
        const getBooks = new Promise((resolve, rejected) => {
            setTimeout(() => {
                losLibros ? resolve(losLibros) : rejected("Error");
            }, 1500);
        });

        getBooks
            .then(detailId && (res => setBooks(res.filter(book => book.id === detailId))))
            .catch(err => console.log(`${err}: No hay nada para vender.`));
    }, [detailId])

    return (

        <section>
            <ItemDetail {...books} />
        </section>
    )
}
