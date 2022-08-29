import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

export const ItemListContainer = () => {

    const [prods, setProds] = useState([]);

    useEffect(() => {
        const FetchData = () => {
            const URL = `https://api.escuelajs.co/api/v1/products?offset=1&limit=10`;
            fetch(URL)
                .then(res => res.json())
                .then(data => {setProds(data);});
        }
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(FetchData);
            }, 3000);
        })
        getData.then(res => {
            setProds(res);
        });
    }, [])

    const onAdd = (iValue) => {
        console.log(`El valor elegido es ${iValue}`);
    }

    return (
        <main >
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
            <section className="sectionProds">
                <ItemList data={prods} />
            </section>
        </main>
    )
}