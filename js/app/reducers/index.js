import { combineReducers } from 'redux';
import selectedAtom from './selectedAtom';
import scene from './scene';
import molecule from './molecule';
import dimensions from './dimensions';


const rootReducer = combineReducers({
    dimensions,
    selectedAtom,
    scene,
    molecule
})

export default rootReducer