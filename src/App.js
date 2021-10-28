import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/events/event/:id">
            <Event></Event>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Switch>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
