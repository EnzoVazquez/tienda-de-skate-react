import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from'./components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App(){
  return (
    <BrowserRouter>
      <body>
        <header>
        <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/producto/:productId'element={<ItemDetailContainer/>}/>
          </Routes>
        </main>
      </body>
    </BrowserRouter>
  )
}

export default App;
