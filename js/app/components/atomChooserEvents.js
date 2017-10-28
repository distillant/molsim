import ELEMENTS from '../data/ELEMENTS';
//import _ from 'lodash'


var AtomDropEventHandler=function(event){
    const ATOMICNUMBER=event.currentTarget.data.key
    let element=ELEMENTS[ATOMICNUMBER];
    let postionX=event.currentTarget.offsetLeft;
    let postionY=event.currentTarget.offsetTop;
   // var System.addAtom(element,{position:{x:postionX,y:postionY,z:0}});

}