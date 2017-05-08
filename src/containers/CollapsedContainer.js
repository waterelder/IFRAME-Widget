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
import * as Actions from '../actions/collapsedPageActions';
import {Link } from 'react-router-dom';

import { Icon} from 'semantic-ui-react'


class Collapsed extends Component {

    clickSubscribe: Function;

    constructor(props) {
        super(props);
        this.clickSubscribe = this.clickSubscribe.bind(this);
    }

    clickSubscribe(): void {
        this.props.actions.clickSubscribe();
    }

    render() {

        return (
            <div>

             <Link to='/form' onClick={this.clickSubscribe} className="blue ui large button"><Icon disabled name='mail' />Receive newsletter</Link>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Collapsed);