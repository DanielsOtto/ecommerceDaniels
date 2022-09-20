import React, { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

export const ItemListContainer = () => {

    const [prods, setProds] = useState([]);
    const { generoId } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollections = collection(db, 'libros');

        if (generoId) {
            // console.log("que me estas dando " + generoId);
            const qFilter = query(itemsCollections, where('genero', '==', generoId));
            getDocs(qFilter)
                .then(snapshot => {
                    setProds(snapshot.docs.map(res => ({ id: res.id, ...res.data() })));
                })
                .catch(err => console.log(`${err}: No hay nada para vender.`));
        } else {
            getDocs(itemsCollections)
                .then(snapshot => {
                    setProds(snapshot.docs.map(res => ({ id: res.id, ...res.data() })));
                });
        }
    }, [generoId]);

    return (
        <main >
            <section className="sectionProds">
                <ItemList data={prods} />
            </section>
        </main>
    )
}