import './App.css';
import Header1   from './components/header1.js';
import Header2 from './components/header2.js';
import MainText from './components/mainText';
import List from './components/list.js';
function App() {
  return (
    <div className="website">
      <div className="header">
        <Header1 name="Nick Cirillo"/>
        <Header2 title="Penn SEAS '26 - Computer Science"/>
      </div>
      <div className="main-container">
        <div className='img-container'> 
          <img className="nick-pic" src={require("./assets/nick-cirillo.jpg")} alt='Nick Cirillo at the University of Pennsylvania.' width="300px"/>
        </div>
        <div className="text-sub-container">
          <MainText text="Hey, I'm Nick Cirillo!"/>
          <MainText text="I'm a student at the University of Pennsylvania studying Computer Science in the Class of '26."/>
          <div className='list-container'>
            <List/>
          </div>
          <p>Check out my <a href="https://github.com/nick-cirillo">GitHub</a> and <a href="https://www.linkedin.com/in/nicholas-cirillo-">LinkedIn</a>!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
