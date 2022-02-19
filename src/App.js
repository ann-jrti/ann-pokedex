import './App.css';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/not-found';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="*" element={<NotFound></NotFound>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
