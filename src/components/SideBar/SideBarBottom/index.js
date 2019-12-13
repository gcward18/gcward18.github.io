import React, { Component } from 'react';
import Img from 'react-image';
import git from '../../../img/GitHub-Mark-32px.png';
import link from '../../../img/linkedin-Mark.png';
import fb from '../../../img/Facebook_Logo_(2019).png';
import email from '../../../img/email-logo.png';
import './index.css';

class SideBarBottom extends Component {
    render() {
        return (
            <div className='contact-div'>
                <ul className='links'>
                    <li><a href='https://github.com/gcward18'><Img src={git} className='l-img'/></a></li>
                    <li><a href='https://www.linkedin.com/in/georgecward/'><Img src={link} className='l-img'/></a></li>
                    <li><a href='https://www.facebook.com/george.ward.925'><Img src={fb} className='l-img'/></a></li>
                    <li><a href='href="mailto:gcward18@gmail.com"'><Img src={email} className='l-img'/></a></li>
                </ul>
            </div>
        );
    }
}

export default SideBarBottom;