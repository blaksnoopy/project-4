import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Splash extends Component {
    render() {
        return (
            <div>
                <h1>Splash Page</h1>
                <Link to='/signup'>Sign Up</Link>
                <br/>
                <Link to='/login'>Log In</Link>
            </div>
        );
    }
}

export default Splash;