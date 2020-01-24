import React from 'react';
import { Link } from 'react-router-dom';
import favPlayerService from '../../utils/favPlayerService';
import './FavPlayers.css';

class FavoritePlayer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			favoritePlayers: []
		}
	}

	async componentDidMount() {
		const favoritePlayers = await favPlayerService.getFavPlayers();
		this.setState({
			favoritePlayers: favoritePlayers
		})
	}

	render() {
		return (
			<div>
				<div className='navbar-div'>
					<Link className='navlink' to='' onClick={this.props.handleLogout}><span className="glyphicon glyphicon-log-out"></span> LOG OUT</Link>
					&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<span>WELCOME, {this.props.user.name}</span>
					&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
					<Link to='/'>&larr;GO BACK</Link>
				</div>
					{this.state.favoritePlayers.length ?
				<div className="FavPlayers">
					{this.state.favoritePlayers.length && 
						this.state.favoritePlayers.map((player, index) => (
							<div key={index}>
								<h3 className='player-name'>{player.name}</h3>
							</div>
						))
					}
				</div>
					:
					<h1 className='no-favplayers'>{this.props.user.name} DOESN'T HAVE ANY FAVORITE PLAYERS YET</h1>
					}
			</div>
		  );
	}

}

export default FavoritePlayer;
