/**
 * Created by lex on 26.03.17.
 */
/**
 * @flow
 */

///Additional Flow types
export type MainFormState = {
    phoneNumber: string,
    errorMessage: string,
    isAgree: boolean
}

export type SubmitFormState = {
    code: string,
    errorMessage: string,
    hintMessage: string;
}

export type SuccessPageState = {
    code: string,
    errorMessage: string,
    hintMessage: string;
}

export type AdditionalFeaturesPageState = {}
export type CollapsedPageState = {};

export type Action<T> = {
    type: string,
    payload: T,
};


export type State = {
    mainForm: MainFormState,
    submitForm: SubmitFormState,
    successPage: SuccessPageState,
    additionalFeaturesPage: AdditionalFeaturesPageState,
    collapsedPage: CollapsedPageState


}

