import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from'./components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail';

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
            <Route path='/producto'element={<ItemDetail/>}/>
          </Routes>
        </main>
      </body>
    </BrowserRouter>
  )
}

export default App;
