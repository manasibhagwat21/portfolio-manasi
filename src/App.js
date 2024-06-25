import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Header.js'
import Projects from './portfolio.js';
import Intro from './Intro.js';
import About from './About.js';
import Timeline from './Timeline.js';
import Contact from './Contact.js';
import { Element } from 'react-scroll';
import Education from './Education.js';
function App() {
  return (
    <div className="App">
      <Header/>
      
      {/* <Intro />
      <About />
      <Projects />
      <Contact /> */}
      
      {/* <Element name="home"><Home /></Element> */}
      <Element name="intro"><Intro /></Element>
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
      <Education />
      
    </div>
  );
}

export default App;