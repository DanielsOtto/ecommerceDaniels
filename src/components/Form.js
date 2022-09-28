import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { Formik } from 'formik';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

export const Form = () => {
    const { cart, totalPrice, removeAll } = useCart();
    const theDate = new Date().toISOString().slice(0, 10);
    const [send, setSend] = useState(false);

    const cargarEnFirebase = ({ name, phone, email }) => {
        const order = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: cart.map(book => ({ id: book.id, title: book.titulo, price: book.precio })),
            date: theDate,
            finalPrice: totalPrice()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({ id }) => {
            console.log("este es el id del doc " + id);
            Swal.fire(
                `Compra realizada ${theDate}`,
                `Tu código de compra es ${id}`,
                'success'
              )
        });
    }
    return (
        <article>
            <Formik
                initialValues={{
                    name: '',
                    phone: 2235123456,
                    email: ''
                }}
                validate={(values) => {
                    let errores = {};

                    if (!values.name) {
                        errores.nombre = "Este campo es obligatorio";
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                        errores.nombre = "El nombre solo puede contener letras y espacios";
                    }

                    if (!values.phone) {
                        errores.telefono = "Este campo es obligatorio";
                    }

                    if (!values.email) {
                        errores.correo = "Este campo es obligatorio";
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        errores.correo = "El correo ingresado es incorrecto";
                    }
                    return errores;
                }}

                onSubmit={(value, { resetForm }) => {
                    /* LIMPIAR CARRITO */
                    cargarEnFirebase(value);
                    resetForm();
                    setSend(true);
                    setTimeout(() => {
                        setSend(false);
                        removeAll();
                    }, 2500);
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'>nombre y apellido</label>
                            <input
                                id='name'
                                name='name'
                                placeholder='Nombre y Apellido'
                                type='text'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.nombre && <div className='error'>{errors.nombre}</div>}
                        </div>
                        <div>
                            <label htmlFor='phone'>teléfono</label>
                            <input
                                id='phone'
                                name='phone'
                                type='phone'
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.phone && errors.telefono && <div className='error'>{errors.telefono}</div>}
                        </div>
                        <div>
                            <label htmlFor='email'>correo</label>
                            <input
                                id='email'
                                name='email'
                                placeholder='correo@correo.com'
                                type='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.correo && <div className='error'>{errors.correo}</div>}
                        </div>
                        <div className='btn-box'>
                            <button type='submit' >terminar compra</button>
                            {console.log(send)}
                        </div>
                        {
                            send && <div className='good-msg-box'>
                                <p className='exito'>La compra se ha realizado correctamente!</p></div>
                        }
                    </form>
                )}
            </Formik>
        </article>
    )
}
