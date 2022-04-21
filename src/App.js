import './App.css';
import { AvaliacaoForm } from './components/avaliacao-form';
import NavbarMenu from './components/navbar-menu/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <NavbarMenu />

      <main>
        <AvaliacaoForm ></AvaliacaoForm>
        
      </main>
      {/* Footer*/}
    </div>
  );
}

export default App;