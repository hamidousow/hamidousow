import { NotFound } from "http-errors";
import { Route, Switch } from "react-router";
import Home from "./home/Home";

function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact component={Home}/>
      
      <Route component={NotFound}/>
    </Switch>
    </>
  );
}

export default App;
