import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { getAllNbaPlayers, getAllTeams } from '../../services/nba-api';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Teams from '../../components/Teams/Teams';
import TeamPage from '../../components/TeamPage/TeamPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      players: [],
      user: userService.getUser()
    };
  }
  
  getOneTeam = (idx) => {
    return this.state.teams[idx];
  }

  async componentDidMount() {
    const players = await getAllNbaPlayers();
    const teams = await getAllTeams();
    const playerInfo = [];
    const teamNames = [];
    players.map((player) => {
      playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
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
      players: playerInfo,
      teams: teamNames
    });
    console.log(playerInfo)
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PROJECT IV</h1>
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage
              players={this.state.players}
              teams={this.state.teams}
              user={this.state.user}
              handleLogout={this.handleLogout}
              getOneTeam={this.getOneTeam}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/teams' render={(props) =>
            <Teams
              history={props.history}
              {...props}
              teams={this.state.teams}
              players={this.state.players}
              user={this.state.user}
            />
          } />
          <Route path='/teams/:idx' render={(props) =>
            <TeamPage
              {...props}
              getOneTeam={this.getOneTeam}
              teams={this.state.teams}
              players={this.state.players}
              user={this.state.user}
            />
          } /> 
        </Switch>
      </div>
    );
  }
}

export default App;
