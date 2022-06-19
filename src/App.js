import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
