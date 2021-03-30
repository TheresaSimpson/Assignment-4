import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutuspage from "./pages/Aboutuspage";
import Loginpage from "./pages/Loginpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutuspage} />
          <Route exact path="/login" component={Loginpage} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
