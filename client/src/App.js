import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
      <Register />
    </div>
  );
}

export default App;
