import './App.css';
import React from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewBooks from './components/ViewBooks';
import ViewOneBook from './components/ViewOneBook';
import Characters from './components/Characters';
import ViewOneCharacter from './components/ViewOneCharacter';
import Map from './components/Map';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
        <Route path='/' element={<ViewBooks/>}/>
        <Route path='/view/book/:id' element={<ViewOneBook/>}/>
        <Route path= '/view/characters' element = {<Characters/>}/>
        <Route path='view/characters/:id' element = {<ViewOneCharacter/>}/>
        <Route path='/view/map' element = {<Map/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
