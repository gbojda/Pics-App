import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
// import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
     
      
    <Navbar/>
    <Routes>
        
        <Route path='/' element={<Intro/>} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/WeatherApp' element={<WeatherApp/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Footer /> 
     
    </div>
  );
}

export default App;
