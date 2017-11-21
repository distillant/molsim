import * as types from '../constants/atomChooser';

export const selectAtom= elementData => ({ type:types.SELECT_ATOM, data:elementData });
export const addAtomToSystem = (atomNum) => ({type:types.ADD_ATOM, atomicNumber:atomNum});

