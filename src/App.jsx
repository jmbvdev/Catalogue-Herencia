
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './index.css';
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/product' element={<Product/>}/>

      </Routes>
    </HashRouter>
  </div>
  )
};

export default App;