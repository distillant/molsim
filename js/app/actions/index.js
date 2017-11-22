import * as types from '../constants/atomChooser';

export const selectAtom= elementData => ({ type:types.SELECT_ATOM, data:elementData });
export const addAtomToSystem = (atomNum) => ({type:types.ADD_ATOM, atomicNumber:atomNum});

export const resize = (atomNum) => ({type:types.RESIZE});


var AtomDropEventHandler=function(event,data){
    setupPlane();
    var target=event.target;
    console.log("dropping elenment", data)
    // const ATOMICNUMBER=target.currentTarget.data.key
    // let element=ELEMENTS[ATOMICNUMBER];
    let postionX=event.currentTarget.offsetLeft;
    let postionY=event.currentTarget.offsetTop ;

    var atom=new Atom(data);
    //atom.updatePosition(postionX,postionY,0);

    atom.updatePosition(-30,-10,0);
    window.molSystem.addAtom(atom);
    //window.molSystem.addAtom(element,{position:{x:postionX,y:postionY,z:0}});

}
