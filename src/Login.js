
import React, { useState } from 'react';
import Home from './Home';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'dorra' && password === 'azerty') {
      onLogin(username); 
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <div>
      <Home/>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
