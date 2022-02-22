import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from'./components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';


function App(){
  return (
    <CartContextProvider>
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
    </CartContextProvider>
  )
}

export default App;
