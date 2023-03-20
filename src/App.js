import logo from './logo.svg';
import './App.css';
import Header from './component/Home/Header';
import Hero from './component/Home/Hero';
import Expertise from './component/Home/Expertise';
import Service from './component/Home/Service';
import Projects from './component/Home/Projects';
import Clients from './component/Home/Clients';
import Client from './component/Home/Client';
import Footer from './component/Home/Footer';

function App() {
  return (
    <div className="App">
      <div className="hero">
      <Header/>
      <Hero/>
      </div>
      <Expertise/>
      <Service/>
      <Projects/>
      <Clients/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
