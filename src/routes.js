// @flow

/**
 * Created by lex on 26.03.17.
 */
import React, {Component} from 'react';
import {  BrowserRouter as Router,
    Route,} from 'react-router-dom'
import MainForm from './containers/MainFormContainer'
import Collapsed from './containers/CollapsedContainer'

import 'semantic-ui-css/semantic.min.css'
import './styles/common.css'
import AdditionalFeaturesContainer from "./containers/AdditionalFeaturesContainer";
//Managing routes
export default class AppRouter extends Component {
    render() {
        //Each Route below corresponds to a page
        return (
            <Router>
                <div>
                    <Route path="/" exact component={ Collapsed }/>
                    <Route path="/form" component={ MainForm }/>
                    <Route path="/additional_feature" component={ AdditionalFeaturesContainer }/>
                </div>
            </Router>
        )
    }
}
