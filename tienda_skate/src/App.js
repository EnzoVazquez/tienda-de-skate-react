
import './App.css';
import NavBar from'./components/NavBar';
import ItemList from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail';

function App(){
  return (
    <body>
      <header>
       <NavBar/>
      </header>
      <main>
        <ItemList/>
        <ItemDetail/>
      </main>
    </body>
  )
}

export default App;
