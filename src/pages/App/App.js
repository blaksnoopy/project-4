import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Splash from '../../components/Splash/Splash';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PROJECT IV</h1>
        </header>
          <div>
          </div>
            <Switch>
              <Route exact path='/' render={() => 
                <Splash />
              } />
              <Route exact path='/signup' render={({ history }) => 
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              }/>
              <Route exact path='/login' render={({ history }) => 
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              }/>
            </Switch>
      </div>
    );
  }
}

export default App;
