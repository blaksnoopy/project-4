import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TeamPage.css';

const TeamPage = (props) => {
    const team = props.getOneTeam(props.match.params.idx);
    // const [likeCounter, setLike] = useState(0)
    // const [dislikeCounter, setDislike] = useState(0)


    // function handleLike() {
    //     setLike(likeCounter + 1);
    
    // }

    // function handleDislike() {
    //     setDislike(dislikeCounter + 1)
    // }

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
                                        <button type='button' key={idx} className='player-name' onClick={props.addFavPlayer}>{player.first_name} {player.last_name}</button>

                                        {/* <div className='button-container' style={{
                                            alignSelf: 'center',
                                            marginTop: '8px',
                                            marginLeft: '10px'
                                        }}> */}
                                            {/* <button onClick={handleLike}><img style={{ height: '20px' }} src="https://img.icons8.com/cotton/64/000000/thumb-up--v1.png" alt="like" /></button>
                                            {likeCounter}
                                            <button onClick={handleDislike} style={{ marginLeft: '10px' }}><img style={{ height: '20px' }} src="https://img.icons8.com/dotty/80/000000/thumbs-down.png" alt="dislike" /></button>
                                            {dislikeCounter} */}
                                        {/* </div> */}
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
