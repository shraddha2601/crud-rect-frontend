import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import Edit from './component/Edit';
import Details from './component/Details';
import {BrowserRouter, Route,Routes, Link, Navigate} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/view/:id" element={<Details/>}/>
        </Routes>
      </>

    </div>
  );
}

export default App;
