import React from 'react';
import './static/css/style.css'
import Nav from './components/Layout/Nav'
import Sidebar from './components/Layout/Sidebar'
import Rightbar from './components/Layout/Rightbar'
import Container from './components/Layout/Container'

function App() {
  return (
    <div className="app">
      <Nav />
      <Sidebar />
      <Rightbar />
      <Container />
    </div>
  );
}

export default App;
