import * as types from '../constants/atomChooser';

var defaultAtom= {};

export default function selectedAtom (state = defaultAtom, action) {
    switch (action.type) {
        case types.SELECT_ATOM:
            return action.data;

        case types.CLEAR_SELECTION:
            return {};

        default:
            return state
    }
};
