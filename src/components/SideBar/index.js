import React, { Component } from 'react';
import SideBarTop from './SideBarTop';
import SideBarMid from './SideBarMid';
import SideBarBottom from './SideBarBottom';
import './index.css'

class SideBar extends Component {
    render() {
        return (
            <div className='sidebar-div'>
                <SideBarTop/>
                <SideBarMid/>
                <SideBarBottom/>
            </div>
        );
    }
}

export default SideBar;