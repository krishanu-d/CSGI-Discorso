import {Actions} from '../types';
const initialState = {
    userToken: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.TOKEN:
            return {
                ...state,
                userToken: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
