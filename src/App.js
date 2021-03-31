import React from 'react'
import HomePage from './pages/homepage/homepage.componante'
import './App.css';
import { Switch, Route} from 'react-router';


const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
