import React, { Component } from 'react';
import me from '../../../img/personal_photo.jpg';
import './index.css'

class SideBarTop extends Component {
    render() {
        return (
            <div className='personal-image-div'>
                <img src={me} className='my-photo' alt='missing_image'/>
                <h1 className='name'>George C. Ward</h1>
                <a className='email' href="mailto:gcward18@gmail.com">GCWARD18@GMAIL.COM</a>
            </div>
        );
    }
}

export default SideBarTop;