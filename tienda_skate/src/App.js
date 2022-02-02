
import './App.css';
import NavBar from'./components/NavBar';
import ItemList from './components/ItemListContainer'

function App(){
  return (
    <header>
      <NavBar/>
      <ItemList greeting="Hola buen dia"/>
    </header>
  )
}

export default App;
