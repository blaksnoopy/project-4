import React from 'react';
// import { Link } from 'react-router-dom';

const TeamPage = (props) => {

    const team = props.getOneTeam(props.match.params.idx);

    return (
      <div className='TeamPage'>
        {team ?
        <>
          <h1>{team.name}</h1>
            {props.players.map((player) => {
                return (
                    player.team === team.name ?
                    <h3>{player.first_name} {player.last_name}</h3>
                :
                <h3></h3>
            )})}
        </>
          :
          <h3>Loading...</h3>
        }
      </div>
    );
  };

export default TeamPage;
