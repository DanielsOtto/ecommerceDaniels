import React, { useEffect, useState } from 'react';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {

    const [book, setBook] = useState({});
    const { detailId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        getDoc(doc(db, "libros", detailId))
            .then( res=> setBook( ({id: res.id, ...res.data()}) ));
    }, [detailId])

    return (
        <section>
            { Object.entries(book).length === 0 ? 
                <div className='ubicarSpinner'>  <div className='spinner'></div>   </div>
            :
               <ItemDetail book={book} />
            }
        </section>
    )
}