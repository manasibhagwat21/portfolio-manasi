import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js'
import Projects from './portfolio.js';
import Intro from './Intro.js';
import About from './About.js';
import Timeline from './Timeline.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro />
      <About />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
