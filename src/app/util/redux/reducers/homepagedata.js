import {HOME_PAGE_INPUT1_CHANGED, HOME_PAGE_INPUT2_CHANGED} from '../actions/actiontypes'

const initialState = {
    input1: "",
    input2: "",
    "computedval": 0
  };

export default function reducer(state = initialState, action) {

    var l1 = (state.input1)? state.input1.length: 0;
    var l2 = (state.input2)? state.input2.length: 0;
    

    switch (action.type) {
        case HOME_PAGE_INPUT1_CHANGED: {
            var val = action.payload.data.length + l2;
            return (Object.assign({}, state, {'input1':action.payload.data, 'computedval':val}));
        }
        case HOME_PAGE_INPUT2_CHANGED: {
            var val = l1 + action.payload.data.length;
            return (Object.assign({}, state, {'input2':action.payload.data, 'computedval':val}));
        }
        default: {
            return (state);
        }
    }
}