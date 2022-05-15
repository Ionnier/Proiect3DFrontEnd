import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { useState } from 'react';
import Comanda from './Comanda';

function App() {
  const [token, setToken] = useState()
  return (
    <div className="App">
      {token === undefined && <Login
        set_token={setToken}
      />}
      {token &&
        <Comanda
          token={token}
        />}
    </div>
  );
}

export default App;
