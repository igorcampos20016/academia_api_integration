import './App.css';
import { AvaliacaoForm } from './components/avaliacao-form';
import Login from './components/pages/login';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <main>
        <Login></Login>
        <AvaliacaoForm ></AvaliacaoForm>
        
      </main>
      {/* Footer*/}
    </div>
  );
}

export default App;