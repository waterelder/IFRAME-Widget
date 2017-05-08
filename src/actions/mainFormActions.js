/**
 * Created by lex on 25.03.17.
 */

/*
 * @flow
 * */
export const TOGGLE_AGREE: string = 'TOGGLE_AGREE';
export const UPDATE_PHONE_NUMBER: string = 'UPDATE_PHONE_NUMBER';
export const PUSH_SEND_BTN: string = 'PUSH_SEND_BTN';

//mesagges to parents
import {RESIZE_BIG_MESSAGE, RESIZE_COLLAPSED_MESSAGE} from '../model/messages'


import type {Action} from '../types/types'


export const toggleAgree = (item: boolean): Action<boolean> => {
    console.log('item^ ' + item.toString());
    return {
        type: TOGGLE_AGREE,
        payload: item
    };
};
export const closeMainForm = (): Action<string> => {
    parent.postMessage(RESIZE_COLLAPSED_MESSAGE, '*');
    return {
        type: RESIZE_COLLAPSED_MESSAGE,
        payload: ""
    };
};

export const openAdvanceInfo = (): Action<string> => {
    parent.postMessage(RESIZE_BIG_MESSAGE, '*');
    return {
        type: RESIZE_BIG_MESSAGE,
        payload: ""
    };
};

export const updatePhoneNumber = (item: string): Action<string> => {
    return {
        type: UPDATE_PHONE_NUMBER,
        payload: item
    };
};
export const pushSendBtn = (): any => {
    return {
        type: PUSH_SEND_BTN,
        payload: ""
    };
};