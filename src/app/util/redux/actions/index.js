import { HOME_PAGE_INPUT1_CHANGED, HOME_PAGE_INPUT2_CHANGED, P1_DATA_CHANGED } from './actiontypes';

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

export const p1DataChanged = data => ({
    type: P1_DATA_CHANGED,
    payload: data
});