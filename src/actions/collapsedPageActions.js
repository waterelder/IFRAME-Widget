/**
 * Created by lex on 26.03.17.
 */
/**
 * Created by lex on 25.03.17.
 */

/*
 * @flow
 * */

import {RESIZE_STANDARD_MESSAGE} from '../model/messages'


import type {Action} from '../types/types'

export const notifyParentClickSubscribe = (): Action<any> => {
    parent.postMessage(RESIZE_STANDARD_MESSAGE, '*'); //Todo Wildcard not safe, should be changed for host url;
    return {
        type: RESIZE_STANDARD_MESSAGE,
        payload: ""
    }
};

export const clickSubscribe = (item: boolean): Function => {
    return (dispatch: Function)=> {
        dispatch(notifyParentClickSubscribe());
        //additional logic
    };
};

