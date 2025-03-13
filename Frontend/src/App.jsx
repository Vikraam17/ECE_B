import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Footer from './components/Pages/Footer';
import UseState from './components/Hooks/UseState';
import UseEffect from './components/Hooks/UseEffect';
import UseRef from './components/Hooks/UseRef';
import UseMemo from './components/Hooks/UseMemo';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/Footer" element={<Footer/>}></Route>
        <Route path="/useState" element={<UseState/>}></Route>
        <Route path="/useEffect" element={<UseEffect/>}></Route>
        <Route path="/useRef" element={<UseRef/>}></Route>
        <Route path="/useMemo" element={<UseMemo/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;