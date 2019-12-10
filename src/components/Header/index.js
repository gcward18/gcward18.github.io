import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as routes from '../../constants/routes';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div className='header-div'>
                
                <Link className='header-text-home' to={routes.HOME}>GEORGE C. WARD</Link>
                <Link className='header-text' to={routes.RESUME}>RESUME</Link>
                <Link className='header-text' to={routes.ABOUT}>ABOUT</Link>
                <Link className='header-text' to={routes.PROJECTS}>PROJECTS</Link>
                <Link className='header-text' to={routes.STATS}>STATS</Link>
                <Link className='header-text' to={routes.CONTACT} style={{border:'none'}}>CONTACT</Link>
            </div>
        );
    }
}

export default Header;