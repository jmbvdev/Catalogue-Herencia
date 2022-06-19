
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './index.css';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </HashRouter>
  </div>
  )
};

export default App;