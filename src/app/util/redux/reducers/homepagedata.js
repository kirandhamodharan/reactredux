import {HOME_PAGE_INPUT1_CHANGED, HOME_PAGE_INPUT2_CHANGED} from '../actions/actiontypes'

const initialState = {
    input1: "",
    input2: "",
    "computed": 0
  };

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case HOME_PAGE_INPUT1_CHANGED: {
            var val = action.payload.length + state.input2.length;
            return (Object.assign({}, state, {'input1':action.payload.data}));
        }
        case HOME_PAGE_INPUT2_CHANGED: {
            var val = state.input1.length + action.payload.length;
            return (Object.assign({}, state, {'input2':action.payload.data}));
        }
        default: {
            return (state);
        }
    }
}