import { useState, createContext } from 'react';
import { NavBar } from './components/navbar/navbar/Navbar';
import './App.css';
import Topo from './components/navbar/topo/topo';

export const NavBarContext = createContext({ rota: 'home', setRota: () => {} });

function App() {
  const [rota, setRota] = useState('');

  const contextData = {
    rota: rota,
    setRota: setRota
  };

  return (
    <div>
      <NavBarContext.Provider value={contextData}>
        <NavBar />
        <Topo />
      </NavBarContext.Provider>
    </div>
  );
}

export default App;
