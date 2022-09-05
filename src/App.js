import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {Home} from './components/Home';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route exact path='/todos' element={ <ItemListContainer />} />
          <Route exact path='/genero/:generoId' element={<ItemListContainer/>} />
          <Route exact path='/detalle/:detailId' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
