import React from 'react'
import HomePage from './pages/homepage/homepage.componante'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import './App.css';
import { Switch, Route} from 'react-router';


function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
