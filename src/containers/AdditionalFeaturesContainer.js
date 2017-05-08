/**
 * @flow
 */

/**
 * Created by lex on 25.03.17.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import type {State} from '../types/types';
import * as Actions from '../actions/additionalFeaturesPageActions';
import {Link} from 'react-router-dom';
import '../styles/additioanalFeaturePage.css'
import {Grid, List, Icon} from 'semantic-ui-react'

class AdditionalFeaturesPage extends Component {

    clickClosePage: Function;
    openMainForm: Function;


    constructor(props) {
        super(props);
        this.clickClosePage = this.clickClosePage.bind(this);
        this.openMainForm = this.openMainForm.bind(this);
    }

    clickClosePage(): void {
        this.props.actions.clickClosePage();
    }

    openMainForm(): void {
        this.props.actions.openMainForm();
    }



    render() {

        return (
            <Grid className="main_form_class">
                <Grid>
                    <Grid.Row centered={true}>
                        <h3><b>Additional features</b></h3>
                    </Grid.Row>
                    <Grid.Row className="additional_feature_wrapper" centered={true}>
                        <Grid.Column width={14}>
                            <List bulleted>
                                <List.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</List.Item>
                                <List.Item>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</List.Item>
                                <List.Item>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </List.Item>
                                <List.Item>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </List.Item>

                            </List>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered={true}>
                        <Link onClick={this.openMainForm} to="/form"
                              className="blue ui large button additional_feature_back_btn">Back
                        </Link>
                    </Grid.Row>
                </Grid>
                <Link onClick={this.clickClosePage} to="/">
                    <Icon name="close" className="close-btn">
                    </Icon>
                </Link>
            </Grid>
        );
    }
}
function mapStateToProps(state: State): Object {
    return {
        collapsedPage: state.collapsedPage
    };
}
function mapDispatchToProps(dispatch: Function): Object {
    const actions: Object = Actions;
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeaturesPage);