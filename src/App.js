import './App.css';
import { TokenContext } from './components/Context';
import { Menu } from './components/Menu';
import { useContext } from 'react';

function App() {
  const[token, setToken] = useContext(TokenContext)

  return (
    <div className="App">
      <Menu />
      {
        token?
          <>Search</>
        :
          <>Cullons</>
      }
    </div>
  );
}

export default App;
