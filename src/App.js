import Header from "./components/header/Header";
import {Routes,Route} from 'react-router-dom';
import Section from "./components/section/Section";
import './App.css';
import AboutSection from "./components/about section/AboutSection";
import ContactSection from "./components/contact section/ContactSection";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<Section/>}/>
        <Route path="/about" element={<AboutSection/>}/>
        <Route path="/contact" element={<ContactSection/>}/>
      </Routes>
    </div>
  );
}

export default App;
