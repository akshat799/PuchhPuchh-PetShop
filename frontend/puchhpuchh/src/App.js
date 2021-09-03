import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/dropdown";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Auth from "./components/Auth/auth";
import Homepage from "./components/homePage/Homepage";
import Admin from "./components/Admin/Admin";
import Inventory from "./components/AdminLinks/Inventory";
import Groomings from "./components/AdminLinks/Groomings";
import Sales from "./components/AdminLinks/Sales";
import Dashboard from "./components/AdminLinks/Dashboard";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch >
          <Route exact path= "/" >
            <Navbar />
            <Homepage />
            <Footer />  
          </Route>
          <Route path="/auth" component={Auth} />
          <Route exact path="/admin" component={Admin} >
            <Sales />
          </Route>
          <Route path= '/admin/inventories'  component={Inventory} />
          <Route path= '/admin/groomings'  component={Groomings} />
          <Route path= '/admin/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
