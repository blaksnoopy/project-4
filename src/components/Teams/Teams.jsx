import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';

const Teams = (props) => {
    
	return (
	  <div>
        <h1>{props.teams.map((team, idx) => {
            return (
                <div>
                    <button type='button' className='btn-default Teams-btn'>
                        <Link 
                            to={`/teams/${idx}`}
                            key={team.name}
                        >
                            {team.name}
                        </Link>
                    </button>
                </div>
                    )
            })}
        </h1> 
	  </div>
    );
}

export default Teams;
