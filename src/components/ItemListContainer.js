import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import losLibros from '../losLibros.json';
import ItemList from './ItemList';

export const ItemListContainer = () => {

    const [prods, setProds] = useState([]);
    const { generoId } = useParams();

    useEffect(() => {
        const getBooks = new Promise((resolve, rejected) => {
                setTimeout(() => {
                    losLibros ? resolve(losLibros) : rejected("Error");
                }, 1500);
            });

        if(generoId){
            getBooks.then(res => setProds(res.filter(book => book.genero === generoId)))
                .catch(err => console.log(`${err}: No hay nada para vender.`));
        }else{
            getBooks.then(res => setProds(res))
                .catch(err => console.log(`${err}: No hay nada para vender.`));
        }
    }, [generoId]);


    return (
        <main >
            {prods?.length ?
                <section className="sectionProds">
                    <ItemList data={prods} />
                </section>
                :
                <div className='ubicarSpinner'>  <div className='spinner'></div>   </div>
            }
        </main>
    )
}