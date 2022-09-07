import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {Cart} from './components/Cart';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <ItemListContainer />} />
          <Route exact path='/genero/:generoId' element={<ItemListContainer/>} />
          <Route exact path='/detalle/:detailId' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
