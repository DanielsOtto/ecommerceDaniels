import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Saludando a todos' />
    </div>
  );
}

export default App;
