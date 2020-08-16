import { HOME_PAGE_INPUT1_CHANGED, HOME_PAGE_INPUT2_CHANGED, P1_DATA_PROCESS_START, P1_DATA_PROCESS_SUCCESS, P1_DATA_PROCESS_ERROR } from './actiontypes';
const axios = require('axios');

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

export const p1DataProcessStart = data => ({
    type: P1_DATA_PROCESS_START,
    payload: data
});

export const p1DataProcessSuccess = data => ({
    type: P1_DATA_PROCESS_SUCCESS,
    payload: data
});

export const p1DataProcessError = data => ({
    type: P1_DATA_PROCESS_ERROR,
    payload: data
});

export const p1DataChanged = data => {
    return (dispatch, getState) => {
        dispatch(p1DataProcessStart(data));
        axios.post('http://localhost:1980/process', {
        //axios.get('http://google.com', {
            "input1": data.input1,
            "input2": data.input2
          })
          .then(function (response) {
            //dispatch(p1DataProcessSuccess(response.data));
            dispatch(p1DataProcessSuccess("TEST"));
          })
          .catch(function (error) {
            dispatch(p1DataProcessError(response.data));
            console.log(error);
          });
      };
}