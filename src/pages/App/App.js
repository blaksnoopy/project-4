import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { getAllNbaPlayers, getAllTeams } from '../../services/nba-api';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      players: [],
      user: userService.getUser()
    };
  }

  async componentDidMount() {
    const players = await getAllNbaPlayers();
    const teams = await getAllTeams();
    const playerNames = [];
    const teamNames = [];
    players.map((player) => {
      playerNames.push({ 
        first_name: player.first_name,
        last_name: player.last_name,
        id: player.id
      })
    })
    teams.map((team) => {
      teamNames.push({
        name: team.full_name,
        id: team.id
      })
    });
    this.setState({
      players: playerNames,
      teams: teamNames
    });
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
                <HomePage 
                players={this.state.players} 
                teams={this.state.teams}
                user={this.state.user}
                handleLogout={this.handleLogout}
                />
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
