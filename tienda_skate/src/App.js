import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from'./components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart.js';
import Add from './components/AddItemContainer'


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
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/add' element={<Add/>}/>
            </Routes>
          </main>
        </body>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
