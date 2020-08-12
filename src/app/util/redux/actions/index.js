import { HOME_PAGE_INPUT1_CHANGED, HOME_PAGE_INPUT2_CHANGED } from './actiontypes';

export const homePageInput1Changed = data => ({
    type: HOME_PAGE_INPUT1_CHANGED,
    payload: {
        data
    }
});

export const homePageInput2Changed = data => ({
    type: HOME_PAGE_INPUT2_CHANGED,
    payload: {
        data
    }
});