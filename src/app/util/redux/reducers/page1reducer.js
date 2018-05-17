
export default function reducer(state = {}, action) {

    switch (action.type) {
        case "ACTION1": {
            return (Object.assign({}, state, {'arg1':action.payload}));
            break;
        }
        default: {
            return (state);
        }
            
    }

}