import { Switch } from 'react-router';
import './App.css';
import { CarsComponent } from './components/CarsComponent';
import { GameComponent } from './components/GameComponent';
import {HomeComponent} from './components/HomeComponent';
import {RegisterComponent} from './components/RegisterComponent';
import {BrowserRouter, Route} from "react-router-dom";
import { TestComponent } from './components/TestComponent';

function App() {
  return (
    <BrowserRouter>
    <HomeComponent/>
      <Switch>
          <Route path="/registration" component={RegisterComponent}/>
          <Route path="/game" component={GameComponent}/>
          <Route path="/cars" component={CarsComponent}/>
          <Route path="/test" component={TestComponent}/>
          <Route path="/" component={RegisterComponent}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
