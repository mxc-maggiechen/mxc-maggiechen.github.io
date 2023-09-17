import Home from "./components/Home";
import NavbarH from "./components/NavbarH";
import About from "./components/About"
import Contact from "./components/Contact"
import {Route, Routes, Router} from 'react-router-dom';
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Settings from "./components/Settings";

function App() {
  return (
    <div className='h-screen w-screen flex bg-[#1E1E1E]'>
     <NavbarH/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/settings' element={<Settings/>}/>
        
      </Routes>

      
      

      
   </div>
  );
}

export default App;
