import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import './App.css';
import Techstack from './Components/Technologies/Techstack';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
        <Header />
        <Intro />
        <Techstack />
        <Projects />
    </div>
  );
}

export default App;
