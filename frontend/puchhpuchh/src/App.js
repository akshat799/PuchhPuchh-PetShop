import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/dropdown";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Auth from "./components/Auth/auth";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch >
          <Route exact path= "/" >
            <Navbar />
            <Footer />  
          </Route>
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
