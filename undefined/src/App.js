import React from 'react';
import Home from '../src/Pages/Home/Home'
import Questions from '../src/Pages/Questions/Questions'
import Results from './Pages/Results/Results';
import Footer from './components/Footer/Footer'

import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/perguntineas' component={Questions} />
        <Route path='/resultis' component={Results} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
