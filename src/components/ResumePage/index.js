import React, { Component } from 'react';
import './index.css'

class ResumePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showExperience : false,
            showSkills: false
        }
    }

    showExperience = () => {
        this.setState({
            showExperience: !this.state.showExperience
        });
    }
    showSkills = () => {
        this.setState({
            showSkills: !this.state.showSkills
        });
    }
    render() {
        var experience = [];
        var skills = [];
        var list = [
            {
                'name':'Python',
                'path':'../../img/languages/python.png'    
            },
            {
                'name':'CSS',
                'path':'../../img/languages/css.png'    
            },
            {
                'name':'HTML',
                'path':'../../img/languages/html.png'    
            },
            {
                'name':'C',
                'path':'../../img/languages/c.png'
            },
            {
                'name':'C++',
                'path':'../../img/languages/c++.jpg'    
            },
            {
                'name':'Javascript',
                'path':'../../img/languages/javascript.png'    
            }
        ]
        experience.push(
            <div>
                <h2 className='title'>AT&T: Full Stack Software Development Intern</h2>
                <h3 className='date'>Summer 2019</h3>
                <ul className='text'>
                    <li className='bullet bullet-att'>   Designed mobile augmented reality application for finding cellular service, implemented
                        with in Unity using C# and Google Firebase</li>
                    <li className='bullet bullet-att'>   Assisted business partner with web development using React.js/Javascript for front-end
                        development and created API’s utilizing Java for accessing data from MySQL</li>
                    <li className='bullet bullet-att'>   Used agile development process for task delegation</li>
                </ul>

                <h2 className='title'>Device Solutions: Software Development Intern</h2>
                <h3 className='date'>Summer 2018</h3>
                <ul className='text'>
                    <li className='bullet bullet-ds'> Captured cellular phone packet data and analyzed it using Wire Shark </li>
                    <li className='bullet bullet-ds'> Created Python scripts to produce simple statistics from data provided by Wire Shark </li>
                    <li className='bullet bullet-ds'> Developed a support/billing database </li>
                    <li className='bullet bullet-ds'> Designed Python library for interacting with database </li>
                </ul>

                <h2 className='title'>WW Wood Products: Software Development Intern</h2>
                <h3 className='date'>Summer 2017</h3>
                <ul className='text'>
                    <li className='bullet bullet-www'> Developed a web based application utilizing C#, JavaScript, HTML, CSS, and SQL that
                    took user inputs to find doors of matching color and size, program had to parse over
                    25,000 active doors in a given day </li>
                    <li className='bullet bullet-www'> Connected with factory managers to ensure the web application met factory floor needs </li>
                    
                    <li className='bullet bullet-www'> Created automated tests to replace manual testing in two of company’s programs saving
                    1-4 hours of labor per test run </li>
                </ul>
                


                <h2 className='title'>Missouri University of Science and Technology: Data Structures Lab Assistant and Grader</h2>
                <h3 className='date'>Spring 2017 - Fall 2019</h3>
                <ul className='text'>
                    <li className='bullet bullet-mst'> Assisted students with learning the fundamental Computer Science tools, such as version
                    control(git), bash scripting, unit testing, Graphical User Interface tools (QT), and much
                    more</li>
                    <li className='bullet bullet-mst'> Elaborated to students on how to utilize the tools that are presented in class</li>
                    <li className='bullet bullet-mst'> Collaborated with instructors on how to better develop the class </li>
                </ul>

                <h2 className='title'>Senior Design Team Lead: Gotcha</h2>
                <h3 className='date'>Spring 2019</h3>
                <ul className='text'>
                    <li className='bullet bullet-gotcha'> Lead team to create user friendly key-less entry door system</li>
                    <li className='bullet bullet-gotcha'> Developed cross-platform mobile application utilizing Dart and Flutter</li>
                    <li className='bullet bullet-gotcha'> Assembled hardware which included a Raspberry Pi, motion detector, and Pi Camera module</li>
                </ul>
            </div>
        )
        skills.push(
            <div className='skill-list'>
                {list.map(e => 
                    <div className='skill'>
                        {e.name}
                    </div>
                )}
            </div>
        )
        return (
            <div>
            <h1 
                className='header' 
                onClick={this.showExperience}
            >
                EXPERIENCE
            </h1>
            {
                (this.state.showSkills && this.state.showExperience) ?
                <div className='scrollable-view'>
                    {this.showSkills()}
                    {experience[0]}
                </div>
                :
                this.state.showExperience ?
                <div className='scrollable-view'>
                    {experience[0]}
                </div>
                : 
                null
            }
            <h1 
                className='header' 
                onClick={this.showSkills}
            >
                SKILLS
            </h1>
            {
                (this.state.showSkills && this.state.showExperience) ?
                <div>
                    {this.showExperience()}
                    {skills[0]}
                </div>
                :
                this.state.showSkills && !this.state.showExperience ?
                <div>
                    {skills[0]}
                </div>
                :
                this.state.showSkills ?
                <div>
                    {skills[0]}
                </div>
                :
                null
            }
            </div>
        );
    }
}

export default ResumePage;