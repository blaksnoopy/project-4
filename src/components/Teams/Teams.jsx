import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';

const Teams = (props) => {
    
	return (
	  <div>
        {props.teams ?  
        <h1 className='team-list'>{props.teams.map((team, idx) => {
            return (
                <div key={team.name} className='team-card'>
                    <Link 
                        to={`/teams/${idx}`}
                        key={team.name}
                    >
                        <button type='button' className='btn-default Teams-btn'>
                            {team.name}
                        </button>
                    </Link>
                </div>
                    )
            })}
        </h1> 
        :
        <h3>Loading...</h3>
        }
	  </div>
    );
}

export default Teams;
