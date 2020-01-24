import React from 'react';
import { Link } from 'react-router-dom';
import './TeamPage.css';

const TeamPage = (props) => {
    const team = props.getOneTeam(props.match.params.idx);

    function handleClick(firstName, lastName) {
        let name = `${firstName} ${lastName}`
        props.addFavPlayer(name);
    }

    return (
        <div className='TeamPage'>
            <div className='navbar-div'>
                <Link className='navlink' to='/' onClick={props.handleLogout}><span className="glyphicon glyphicon-log-out"></span> LOG OUT</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <span>WELCOME, {props.user.name}</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <Link to='/'>&larr;GO BACK</Link>
            </div>
            {team ?
                <>
                    <h1 className='team-name'>{team.name}</h1>
                    <h3 className='add-fav'>CLICK ON A PLAYER TO ADD TO FAVORITES</h3>
                    {props.players.map((player, idx) => {
                        return (
                            player.team === team.name ?
                                <div key={idx}>
                                    <div className="player-container" style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: "center",
                                        marginLeft: '50px'
                                    }}>
                                        <button type='button' key={idx} className='player-name' onClick={() => handleClick(player.first_name, player.last_name)}>{player.first_name} {player.last_name}</button>
                                    </div>
                                </div>
                                :
                                <h3 key={idx}></h3>
                        )
                    })}
                </>
                :
                <h3 className='loading'>Loading...</h3>
            }
        </div>
    );
};

export default TeamPage;
