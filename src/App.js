import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Event from './components/Event/Event';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/events/event/:id">
          <Event></Event>
        </Route>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
