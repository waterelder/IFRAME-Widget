/**
 * Created by lex on 26.03.17.
 */


import {RESIZE_COLLAPSED_MESSAGE, RESIZE_STANDARD_MESSAGE} from '../model/messages'



export const openMainForm = (): Action<string> => {
    parent.postMessage(RESIZE_STANDARD_MESSAGE, '*');
    return {
        type: RESIZE_STANDARD_MESSAGE,
        payload: ""
    }
};

export const clickClosePage = (): Action<any> => {
    parent.postMessage(RESIZE_COLLAPSED_MESSAGE, '*');
    return {
        type: RESIZE_COLLAPSED_MESSAGE,
        payload: ""
    };

};