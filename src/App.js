import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import './App.css';
import Techstack from './Components/Technologies/Techstack';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Navbar />
        <Intro />
        <Techstack />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
