import React from 'react';
import {Link} from 'react-router-dom';
import Teams from '../../components/Teams/Teams';

const HomePage = (props) => {
    let signedIn = props.user ?
    <div>
        <div>
            <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span>WELCOME, {props.user.name}</span>
        </div>
        <div>
            <Teams 
                players={props.players}
                teams={props.teams}
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </div>
    </div>
        :
    <div>
        <Link to='/login'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup'>SIGN UP</Link>
    </div>;

    return (
        <div>
            {signedIn}
        </div>
    );
}

export default HomePage;