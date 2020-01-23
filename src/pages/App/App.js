import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import Teams from '../../components/Teams/Teams';
import TeamPage from '../../components/TeamPage/TeamPage';
import { 
  getAllNbaPlayers1, 
  getAllNbaPlayers2, 
  getAllNbaPlayers3, 
  getAllNbaPlayers4, 
  getAllNbaPlayers5, 
  getAllNbaPlayers6, 
  getAllNbaPlayers7, 
  getAllNbaPlayers8, 
  getAllNbaPlayers9, 
  getAllNbaPlayers10, 
  getAllNbaPlayers11, 
  getAllNbaPlayers12, 
  getAllNbaPlayers13, 
  getAllNbaPlayers14, 
  getAllNbaPlayers15, 
  getAllNbaPlayers16, 
  getAllNbaPlayers17, 
  getAllNbaPlayers18, 
  getAllNbaPlayers19, 
  getAllNbaPlayers20, 
  getAllNbaPlayers21, 
  getAllNbaPlayers22, 
  getAllNbaPlayers23, 
  getAllNbaPlayers24, 
  getAllNbaPlayers25, 
  getAllNbaPlayers26, 
  getAllNbaPlayers27, 
  getAllNbaPlayers28, 
  getAllNbaPlayers29, 
  getAllNbaPlayers30, 
  getAllNbaPlayers31, 
  getAllNbaPlayers32, 
  getAllNbaPlayers33, 
  getAllTeams } 
  from '../../services/nba-api';

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
    const teams = await getAllTeams();
    const players1 = await getAllNbaPlayers1();
    const players2 = await getAllNbaPlayers2();
    const players3 = await getAllNbaPlayers3();
    const players4 = await getAllNbaPlayers4();
    const players5 = await getAllNbaPlayers5();
    const players6 = await getAllNbaPlayers6();
    const players7 = await getAllNbaPlayers7();
    const players8 = await getAllNbaPlayers8();
    const players9 = await getAllNbaPlayers9();
    const players10 = await getAllNbaPlayers10();
    const players11 = await getAllNbaPlayers11();
    const players12 = await getAllNbaPlayers12();
    const players13 = await getAllNbaPlayers13();
    const players14 = await getAllNbaPlayers14();
    const players15 = await getAllNbaPlayers15();
    const players16 = await getAllNbaPlayers16();
    const players17 = await getAllNbaPlayers17();
    const players18 = await getAllNbaPlayers18();
    const players19 = await getAllNbaPlayers19();
    const players20 = await getAllNbaPlayers20();
    const players21 = await getAllNbaPlayers21();
    const players22 = await getAllNbaPlayers22();
    const players23 = await getAllNbaPlayers23();
    const players24 = await getAllNbaPlayers24();
    const players25 = await getAllNbaPlayers25();
    const players26 = await getAllNbaPlayers26();
    const players27 = await getAllNbaPlayers27();
    const players28 = await getAllNbaPlayers28();
    const players29 = await getAllNbaPlayers29();
    const players30 = await getAllNbaPlayers30();
    const players31 = await getAllNbaPlayers31();
    const players32 = await getAllNbaPlayers32();
    const players33 = await getAllNbaPlayers33();
    const playerInfo = [];
    const teamNames = [];

    players1.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players2.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players3.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players4.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players5.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players6.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players7.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players8.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players9.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players10.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players11.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players12.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players13.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players14.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players15.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players16.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players17.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players18.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players19.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players20.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players21.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players22.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players23.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players24.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players25.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players26.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players27.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players28.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players29.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players30.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players31.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players32.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    players33.forEach((player) => {
       playerInfo.push({
        first_name: player.first_name,
        last_name: player.last_name,
        team: player.team.full_name,
        id: player.id
      })
    })
    teams.forEach((team) => {
       teamNames.push({
        name: team.full_name,
        id: team.id
      })
    });
    this.setState({
      players: playerInfo,
      teams: teamNames
    });
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
        <div className="background"></div>
        <header className="App-header">
          <h1 className='h1-header'>REACT NBA API</h1>
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
