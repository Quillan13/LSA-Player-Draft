import "./App.scss";
import Home from "./Pages/Home";
import Page2 from "./Pages/Page2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rules from "./Pages/Rules";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/rules">
              <Rules />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
