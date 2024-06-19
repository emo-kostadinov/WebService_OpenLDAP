import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/main" component={MainScreen} />
        <Route path="/new-post" component={NewPostScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/register" component={RegisterScreen} />
      </Switch>
    </Router>
  );
}

export default App;
