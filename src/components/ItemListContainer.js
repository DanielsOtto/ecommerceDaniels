import React, { useState, useEffect } from 'react';
import losLibros from '../losLibros.json';
import ItemCount from './ItemCount';
import ItemList from './ItemList';


export const ItemListContainer = () => {

    const [prods, setProds] = useState([]);

    const getClothes = (data, time) =>
        new Promise ((resolve, rejected) =>{
            setTimeout(() => {
                data ? resolve(data) : rejected("Error");
            }, time);
        });
    
    useEffect(()=> {

        getClothes(losLibros, 2500)
            .then(res => {
                setProds(res);
            })
            .catch( err => console.log(`${err}: No hay nada para vender.`));
    }, [])

    const onAdd = (iValue) => {
        console.log(`El valor elegido es ${iValue}`);
    }

    return (
        <main >
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
            {prods?.length ?
                <section className="sectionProds">
                    <ItemList data={prods} />
                </section>
                :
                  <div className='ubicarSpinner'>  <div class="spinner"></div>   </div>  
            }
        </main>
    )
}