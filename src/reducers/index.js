/**
 * Created by lex on 25.03.17.
 */
/*
 * @flow
 * */
import mainForm from './mainFormReducer';
import collapsedPage from './mainFormReducer';
import {combineReducers} from 'redux';
import additionalFeaturesPage from "../types/types";

//Combine reducers
const rootReducer = combineReducers({
    mainForm,
    collapsedPage,
    additionalFeaturesPage
});
export default rootReducer;