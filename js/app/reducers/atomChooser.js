import {ADD_ATOM_TO_SYSTEM} from './reducers';

const initialState = [
    {
        ChooserPosition:8
    }
];
/*
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]

        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            )
    }
}*/