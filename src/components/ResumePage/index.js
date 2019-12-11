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

    createSkillChart = skill_level => {
        var level = []
        var backgroundColor = 'red';
        for (var i = 0; i < skill_level; i++){
            if(i < 3){
                backgroundColor = 'red'
            }else if ( i >=3 && i <7){
                backgroundColor = 'yellow'
            }
            else{
                backgroundColor = 'green'
            }
            level.push(
                <div className='skill-level' style={{backgroundColor}} key={i}></div>
            )
        }
        return level
    }
    render() {
        var experience = [];
        var skills = [];
        var list = [
            {
                'name':'Python',
                'skill-level': 9,
                'path':`${process.env.PUBLIC_URL}/assets/languages/python.png` 
            },
            {
                'name':'CSS',
                'skill-level': 4,
                'path':'../img/languages/css.png'    
            },
            {
                'name':'HTML',
                'skill-level': 6,
                'path':'../../img/languages/html.png'    
            },
            {
                'name':'C',
                'skill-level': 5,
                'path':'../../img/languages/c.png'
            },
            {
                'name':'C++',
                'skill-level': 8,
                'path':'../../img/languages/c++.jpg'    
            },
            {
                'name':'Flutter',
                'skill-level': 4,
                'path':'../../img/languages/flutter.png'    
            },
            {
                'name':'React',
                'skill-level': 8,
                'path':'../../img/languages/react.png'    
            },
            {
                'name':'Git',
                'skill-level': 6,
                'path':'../../img/languages/git.png'    
            },
            {
                'name':'Pandas',
                'skill-level': 5,
                'path':'../../img/languages/pandas.png'    
            },
            {
                'name':'Numpy',
                'skill-level': 5,
                'path':'../../img/languages/numpy.png'    
            }
        ]

        var ex_list = [ 
            {
                'title': 'AT&T: Full Stack Software Development Intern',
                'date': 'Summer 2019',
                'bullet-style': 'bullet bullet-att',
                'bullets': [
                    'Designed mobile augmented reality application for finding cellular service, implemented with in Unity using C# and Google Firebase',
                    'Assisted business partner with web development using React.js/Javascript for front-end development and created API’s utilizing Java for accessing data from MySQL',
                    'Used agile development process for task delegation'
                ]
            },
            {
                'title': 'Device Solutions: Software Development Intern',
                'date': 'Summer 2018',
                'bullet-style': 'bullet bullet-ds',
                'bullets': [
                    'Captured cellular phone packet data and analyzed it using Wire Shark',
                    'Created Python scripts to produce simple statistics from data provided by Wire Shark',
                    'Developed a support/billing database',
                    'Designed Python library for interacting with database'
                ]
            },
            {
                'title': 'WW Wood Products: Software Development Intern',
                'date': 'Summer 2017',
                'bullet-style': 'bullet bullet-www',
                'bullets': [
                    'Developed a web based application utilizing C#, JavaScript, HTML, CSS, and SQL that took user inputs to find doors of matching color and size, program had to parse over 25,000 active doors in a given day',
                    'Connected with factory managers to ensure the web application met factory floor needs',
                    'Created automated tests to replace manual testing in two of company’s programs saving 1-4 hours of labor per test run'
                ]
            },
            {
                'title': 'Missouri University of Science and Technology: Data Structures Lab Assistant and Grader',
                'date': 'Spring 2017 - Fall 2019',
                'bullet-style': 'bullet bullet-mst',
                'bullets': [
                    'Assisted students with learning the fundamental Computer Science tools, such as version control(git), bash scripting, unit testing, Graphical User Interface tools (QT), and much more',
                    'Elaborated to students on how to utilize the tools that are presented in class',
                    'Developed a support/billing database',
                    'Collaborated with instructors on how to better develop the class'
                ]
            },
            {
                'title': 'Senior Design Team Lead: Gotcha',
                'date': 'Spring 2019',
                'bullet-style': 'bullet bullet-gotcha',
                'bullets': [
                    'Lead team to create user friendly key-less entry door system',
                    'Developed cross-platform mobile application utilizing Dart and Flutter',
                    'Assembled hardware which included a Raspberry Pi, motion detector, and Pi Camera module'
                ]
            }
        ]

        
        experience.push(
            <div>
                {ex_list.map(e => 
                    <div key={e.title}>
                        <h2 className='title'>{e.title}</h2>
                        <h3 className='date'>{e.date}</h3>
                        <ul className='text'>
                            {e.bullets.map(b => 
                                <li className={e["bullet-style"]} key={b}> {b} </li>
                            )}
                        </ul>
                    </div>
                    
                )}
            </div> 
        )
            
        skills.push(
            <div className='skill-list'>
                <div className='skill-header'>
                    <div className='skill-header-left'>Skill</div>
                    <div className='skill-header-right'>Proficiency (1-10)</div>
                </div>
                {list.map(e => 
                    <div className='skill-row'>
                        <div className='skill' key={e.name}>
                            {e.name}
                        </div>
                        {this.createSkillChart(e['skill-level'])}
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