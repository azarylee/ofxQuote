import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// scss
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

// components 
import Title from '../../components/Title';

// pages
import Home from '../Home';
import Quote from '../Quote';

function App() {
  return (
    <div className="App">
      <Title className="quoteTitle" title="Quick Quote"/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/quote' component={Quote} />

          <Route path='*' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;