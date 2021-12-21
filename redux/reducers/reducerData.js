import { GET_DATA } from "../contants";

const initialState = {
    data: [],
};

const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default reducerData;
