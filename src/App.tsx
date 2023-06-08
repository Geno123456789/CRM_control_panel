import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header';
import { MainPage } from './pages/MainPage';
import { AddressPage } from './pages/AddressPage';
import { Sidebar } from './components/Sidebar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainContainer'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/address' element={<AddressPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
