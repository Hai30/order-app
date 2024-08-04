import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import './components/styles.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/second-screen">
            <SecondScreen />
          </Route>
          <Route path="/">
            <FirstScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
