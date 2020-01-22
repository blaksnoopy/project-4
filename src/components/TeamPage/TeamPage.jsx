import React from 'react';
// import { Link } from 'react-router-dom';

const TeamPage = (props) => {

    const team = props.getOneTeam(props.match.params.idx);

    return (
      <div className='TeamPage'>
        {team ?
        <>
          <h1>{team.name}</h1>
          <p></p>
        </>
          :
          <h3>Loading...</h3>
        }
      </div>
    );
  };

export default TeamPage;
