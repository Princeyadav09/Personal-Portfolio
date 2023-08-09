import './App.css';
import Achievements from './Components/Achievements';
import CodingProfiles from './Components/CodingProfiles';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <Projects/>
     <Achievements/>
     <Skills/>
     <CodingProfiles/>
     <Footer/>
    </div>
  );
}

export default App;
