import React, { Component } from 'react';
import './index.css';

class SideBarMid extends Component {
    render() {
        return (
            <div className='about-div'>
                <h3 className='header'>ABOUT</h3>
                <p className='content'>
                    Hi, I'm George and I'm into building things. I've graduated with my Bachelors in CS from Missouri University of
                    Science and Technology and will start both my Masters at Georgia Tech and a Co-op at Intuitive Surgical Janurary
                    2020. I have a lot of hobbies such as running, weight lifting, coding, telling dad jokes, rummy, pool, 
                    and many more. Since I started my first programming course in Janurary of 2017 I've had internships with WW Wood 
                    Products, Device Soultions, and AT&T doing a variety of software jobs. I really enjoy developing solutions for peoples 
                    problems and if you'd like to connect please feel free to reach out to me.                  
                </p>
            </div>
        );
    }
}

export default SideBarMid;