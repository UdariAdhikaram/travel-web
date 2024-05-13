import React from 'react'
import './app.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Main from './components/Main/Main'
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/> 
    
  <Router>
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={AboutPage} /> {/* Add this line */}
      <Route component={Main} />
    </Switch>
    <Footer />
  </div>
  </Router>
  
  </>
  );
}

export default App