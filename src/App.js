import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Saludos'/>} />
        <Route path="categoria/:categoryName" element={<ItemListContainer/>} />
        <Route path="item/:idProd" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;