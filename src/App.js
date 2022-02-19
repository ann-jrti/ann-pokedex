import './App.css';
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
