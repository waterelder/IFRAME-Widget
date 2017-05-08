/**
 * Created by lex on 25.03.17.
 */
/**
 * @flow
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import type {State} from '../types/types';
import * as Actions from '../actions/mainFormActions';
import '../styles/mainForm.css'
import {Link} from "react-router-dom";
import {Grid, Form, Button, Icon} from 'semantic-ui-react'


class MainForm extends Component {

    changePhoneNumber: Function;
    toggleAgree: Function;
    closeMainForm: Function;
    openAdvanceInfo: Function;

    constructor(props) {
        super(props);
        this.toggleAgree = this.toggleAgree.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.closeMainForm = this.closeMainForm.bind(this);
        this.openAdvanceInfo = this.openAdvanceInfo.bind(this);

    }

    changePhoneNumber(event: Object): void {
        this.props.actions.updatePhoneNumber(event.target.value);
    }

    toggleAgree(event: Object): void {
        console.log(this.props.isAgree);
        this.props.actions.toggleAgree(!this.props.mainForm.isAgree);
    }

    closeMainForm(): void {
        this.props.actions.closeMainForm();
    }

    openAdvanceInfo(): void {
        this.props.actions.openAdvanceInfo();
    }

    render() {

        const {errorMessage, isAgree} = this.props.mainForm;
        return (
            <Grid className="main_form_class">
                <Grid>


                    <Grid.Row >
                        <Grid.Column width={16}><h3 className="heading">Receive newsletter</h3></Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered={true}>


                        <Grid.Column width={7}>
                            {/*<input type="text" onChange={this.changePhoneNumber} placeholder="+7(XXX) XXX-XX-XX"/>*/}
                            <Form>
                                <Form.Field>
                                    <label><Icon name="text telephone"/>Phone Number</label>
                                    <input onChange={this.changePhoneNumber} placeholder='+1(XXX) XXX-XX-XX'/>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={7} className="send_number_btn">
                            <Button disabled={ !isAgree} primary={true}>Send SMS</Button>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered={true}>
                        <Grid.Column width={14}>
                            <label className="danger">{errorMessage}</label>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered={true}>

                        <Grid.Column width={14}>
                            <Form.Field>
                                <div className="ui checkbox">
                                    <input type="checkbox" checked={isAgree} onChange={this.toggleAgree}/>
                                    <label>I agree with <a
                                        href="https://google.ru">terms</a></label>
                                </div>

                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row centered={true} className="last">

                        <Grid.Column width={7}>
                            <Link onClick={this.openAdvanceInfo} to="/additional_feature"
                                  className="blue ui large button">Additional features
                            </Link>
                        </Grid.Column>

                    </Grid.Row>


                </Grid>

                <Link onClick={this.closeMainForm} to="/">
                    <Icon name="close" className="close-btn">
                    </Icon>
                </Link>

            </Grid>
        )
            ;
    }
}
function mapStateToProps(state: State): Object {
    return {
        mainForm: state.mainForm
    };
}
function mapDispatchToProps(dispatch: Function): Object {
    const actions: Object = Actions;
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
const connects = connect(mapStateToProps, mapDispatchToProps);


export default connects(MainForm);