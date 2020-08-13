import {P1_DATA_CHANGED} from '../actions/actiontypes'

const initialState = {
    input1: "",
    input2: "",
    "computedval": 0
  };

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case P1_DATA_CHANGED: {
            var d1 = action.payload.input1;
            var d2 = action.payload.input2;
            return (Object.assign({}, state, {'input1':d1,
            'input2':d2,
            'computedval':d1.length + d2.length}));
        }
        default: {
            return (state);
        }
    }
}