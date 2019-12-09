import React from 'react';
import Home from '../src/Pages/Home/Home'
import Questions from '../src/Pages/Questions/Questions'
import { BrowserRouter ,Switch, Route} from 'react-router-dom'


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact={true} path= '/' component={Home}/ >
          <Route path= '/perguntineas' component={Questions} />
        </div>    
      </Switch>
    </BrowserRouter>
  );
}

export default App;
