import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/dropdown";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/auth";
import NewAppointment from "./appointments/newAppointment/newAppointment";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route path="/">
            <Navbar />
            <Switch>
              <Route path="/newAppointment" component={NewAppointment} />
            </Switch>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
