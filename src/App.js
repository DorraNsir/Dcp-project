import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import AdminPage from './AdminPage';
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div>
      <Home />
      <Router>
        <Route
          path="/login"
          render={() => (loggedInUser ? <Redirect to="/admin" /> : <Login onLogin={handleLogin} />)}
        />
        <Route
          path="/admin"
          render={() => (loggedInUser ? <AdminPage username={loggedInUser} /> : <Redirect to="/login" />)}
        />
      </Router>
    </div>
  );}
export default App;
