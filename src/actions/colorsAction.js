import {
    SAVE_COLORS
} from "./actionTypes";

export function saveColors(data) {
    return {
        type: SAVE_COLORS,
        data
    };
}

