import './App.css';
import React from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewBooks from './components/ViewBooks';
import ViewOneBook from './components/ViewOneBook';
import Characters from './components/Characters';
import ViewOneCharacter from './components/ViewOneCharacter';


function App() {
  return (
    <BrowserRouter>
    <div className="App"
    style={{backgroundImage:"url(/middleEarthMap.png)", opacity:'.8'}}>
    
      <Routes>
        <Route path='/' element={<ViewBooks/>}/>
        <Route path='/view/book/:id' element={<ViewOneBook/>}/>
        <Route path= '/view/characters' element = {<Characters/>}/>
        <Route path='view/characters/:id' element = {<ViewOneCharacter/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
