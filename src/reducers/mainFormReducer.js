/*
 * @flow
 *
 * */

import type {MainFormState, Action} from '../types/types';
import {TOGGLE_AGREE, UPDATE_PHONE_NUMBER} from '../actions/mainFormActions';
const initialState: MainFormState = {
    phoneNumber: "",
    errorMessage: "",
    isAgree: false
};

export default function mainForm(state: MainFormState = initialState, action: Action<any>): MainFormState {
    switch (action.type) {
        case UPDATE_PHONE_NUMBER:
            return {...state, phoneNumber: action.payload};
        case TOGGLE_AGREE:
            return {...state, isAgree: action.payload};
        default:
            return state;
    }
};