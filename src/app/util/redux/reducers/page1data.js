import { P1_DATA_PROCESS_START, P1_DATA_PROCESS_SUCCESS, P1_DATA_PROCESS_ERROR } from '../actions/actiontypes'

const initialState = {
    input1: "",
    input2: "",
    computedval: 0,
    proccessingInd: "N"
  };

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case P1_DATA_PROCESS_START: {
            var d1 = action.payload.input1;
            var d2 = action.payload.input2;
            return (Object.assign({}, state, {'input1':d1,
            'input2':d2, 'proccessingInd': "Y"}));
            //'computedval':d1.length + d2.length}));
        }
        case P1_DATA_PROCESS_SUCCESS: {
            var d1 = action.payload.input1;
            var d2 = action.payload.input2;
            return (Object.assign({}, state, {'proccessingInd': "N", 
                computedval:action.payload}));
        }
        default: {
            return (state);
        }
    }
}