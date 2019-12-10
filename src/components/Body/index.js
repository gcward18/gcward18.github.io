import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './index.css'
import * as routes from '../../constants/routes'
import AboutPage from '../AboutPage';
import ResumePage from '../ResumePage';
import ProjectPage from '../ProjectPage';
import StatsPage from '../StatsPage';
import ContactPage from '../ContactPage';

class Body extends Component {
    render() {
        return (
            <div  className='body-div'>
                <Switch>
                    <Route path={routes.HOME} component={AboutPage}/>
                    <Route path={routes.RESUME} component={ResumePage}/>
                    <Route path={routes.ABOUT} component={AboutPage}/>
                    <Route path={routes.PROJECTS} component={ProjectPage}/>
                    <Route path={routes.STATS} component={StatsPage}/>
                    <Route path={routes.CONTACT} component={ContactPage}/>
                </Switch>
            </div>
        );
    }
}

export default Body;