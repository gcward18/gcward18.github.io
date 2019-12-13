import React, { Component } from 'react';
import SideBar from '../SideBar';
import Body from '../Body';
import './index.css';

class Content extends Component {
    render() {
        return (
            <div className='content-body-div'>
                <SideBar/>
                <Body/>
            </div>
        );
    }
}

export default Content;