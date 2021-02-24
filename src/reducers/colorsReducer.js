import { SAVE_COLORS } from "../actions/actionTypes";


// @ts-ignore
export default function colorsReducer(state = [], action) {
    switch (action.type) {
        case SAVE_COLORS: {
            return action.data;
        }
        default:
            return state;
    }
}
