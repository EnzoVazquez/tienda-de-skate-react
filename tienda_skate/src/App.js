
import './App.css';
import NavBar from'./components/NavBar';
import ItemList from './components/ItemListContainer'

function App(){
  return (
    <body>
      <header>
       <NavBar/>
      </header>
      <main>
        <ItemList/>
      </main>
    </body>
  )
}

export default App;
