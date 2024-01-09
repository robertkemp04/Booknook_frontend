// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './PageComponents/Home';
import Dashboard from './PageComponents/Dashboard';
import LoginForm from './Components/Login/LoginForm';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {

    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/LoginForm"
            render={() => <LoginForm onLogin={handleLogin} />}
          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;