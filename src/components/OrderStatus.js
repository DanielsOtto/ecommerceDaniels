import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import PurchaseData from './PurchaseData';

export const OrderStatus = () => {
    const [claseN, setClaseN] = useState('clear-msg');
    const [orderFound, setOrderFound] = useState({});
    const [input, setInput] = useState("");
    const [errorCode, setErrorCode] = useState(false);


    const cleanSearch = (e) => {
        e.preventDefault();
        setInput(' ');
        setOrderFound({});
    }
    const getCodeOrder = (e) => {
        setInput((prev) => prev = e.target.value);
    }
    const checkCode = () => {
        if (input.length === 20) {
            setErrorCode(prev => prev = false);
            return true;
        } else {
            setErrorCode(prev => prev = true);
            setOrderFound({});
            return false;
        }
    }
    const getOrder = async (e) => {
        e.preventDefault();
        if (checkCode()) {
            const db = getFirestore();
            const objsCollection = collection(db, 'orders');
            const collections = await getDocs(objsCollection);
            const array = collections.docs.map(bk => ({ id: bk.id, ...bk.data() }));

            if (array.find(order => order.id.toString() === input)) {
                setOrderFound(array.find(order => order.id.toString() === input))
            } else {
                setClaseN((prev) => prev = 'appear-msg');
                setOrderFound({});
            }
        }
    }
    return (
        <>
            <section className='OrderStatus-box'>
                <h2>Estado del pedido</h2>
                <p className='OrderStatus-info'>Ingrese su código de compra para saber el estado de su pedido. El cuál es un código de 20 dígitos alfanúmericos.</p>
                <form className='OS-boxSearch'>
                    <button type='submit' onClick={(e) => { cleanSearch(e) }}>limpiar</button>
                    <input value={input} onChange={(e) => { getCodeOrder(e) }}></input>
                    <button type='submit' onClick={e => { getOrder(e) }}>buscar</button>
                    {errorCode && <p className='error-msg'>El código ingresado no tiene 20 digitos</p>}
                </form>
            </section>
            {
                Object.entries(orderFound).length > 0 ? (
                    <div>
                        <PurchaseData {...orderFound} />
                    </div>
                ) : (
                    <div className={claseN}>
                        <p>cÓdigo incorrecto</p>
                    </div>
                )
            }
        </>
    )
}
