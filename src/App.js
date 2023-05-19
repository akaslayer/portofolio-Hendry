import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/home';
import React from 'react';
import Project from './components/project/Project';




const App = () => {
  return (
    <>
    <Header></Header>
    <main className='main'><Home></Home></main>
    <About></About>
    <Project></Project>
    </>
  )
}
export default App;
