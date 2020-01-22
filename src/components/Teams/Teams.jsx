import React from 'react';
import { Link } from 'react-router-dom';

function Teams(props) {
	return (
	  <div>
	    <h1>{props.teams.map((team, index) => {
            return (
                <div key={index}>
                    <Link 
                        to=''
                        >
                        {team.name}
                    </Link>
                </div>
                    )
        })}</h1>
	  </div>
	);
}

export default Teams;
