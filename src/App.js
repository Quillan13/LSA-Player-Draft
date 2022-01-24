import './App.css';
import Home from './Pages/Home'
import Page2 from './Pages/Page2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (

<> 
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/page2">
        <Page2 />
      </Route> 
    </Switch> 
  </Router>    
</>

  );
}

export default App;
