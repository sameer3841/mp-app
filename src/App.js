import './App.css';
import { Navbar } from './Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { More } from './pages/More';
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <Router basename='/mp-app'>
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="more" element={<More/>}/>
        </Routes>
      </div>
          
    </div>
    </Router>
  );
}

export default App;
