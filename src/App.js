import { Switch, Route } from 'react-router';
import Home from "./pages/Home"; 
import Temperature from './pages/Temperature';
import Customize from './pages/Customize';
import './App.css';

function App() {
  return (
    <div className="App">
   <nav>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/temperature" component={Temperature}></Route>
      <Route exact path="/customize-image" component={Customize}></Route>
    </Switch> 
   </nav> 
   
    </div>
  );
}

export default App;
