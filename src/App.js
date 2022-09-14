import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import Error404 from './components/Error404';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/genero/:generoId' element={<ItemListContainer />} />
            <Route exact path='/detalle/:detailId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
