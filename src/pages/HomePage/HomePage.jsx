import React from 'react';
import { Link } from 'react-router-dom';
import Teams from '../../components/Teams/Teams';

const HomePage = (props) => {
    let signedIn = props.user ?
        <div>
            <div className='navbar-div'>
                <Link className='navlink' to='' onClick={props.handleLogout}><span class="glyphicon glyphicon-log-out"></span> LOG OUT</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span>WELCOME, {props.user.name}</span>
            </div>
            <div>
                {props.teams.length ?
                    <div>
                    <Teams
                    players={props.players}
                    teams={props.teams}
                    user={props.user}
                    handleLogout={props.handleLogout}
                    />
                    </div>
                    :
                    <h3 className='loading'>Loading...</h3>
                }
            </div>
        </div>
        :
        <div>
            <div className='navbar-div'>
                <Link to='/login'>LOG IN</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup'>SIGN UP</Link>
            </div>
        </div>
    ;

    return (
        <div>
            {signedIn}
        </div>
    );
}

export default HomePage;