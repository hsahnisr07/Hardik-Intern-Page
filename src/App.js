import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component calls
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import Acads from './components/Acads/Acads';
import Intern from './components/Intern/Intern';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>} >
            <Route index element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Events" element={<Events/>}/>
            <Route path="/Intern" element={<Intern/>}/>
            <Route path="/Acads" element={<Acads/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
