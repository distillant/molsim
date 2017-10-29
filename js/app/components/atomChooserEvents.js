import ELEMENTS from '../data/ELEMENTS';
//import _ from 'lodash'
import Atom from '../models/Atom';

var rayCaster,mousePosition;

var setupPlane=function(){
    var geometry = new THREE.PlaneGeometry( 200, 30, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    //material.transparent = true;
    var plane = new THREE.Mesh( geometry, material );

    window.molSystem.scene.add( plane );
    rayCaster = new THREE.Raycaster();
    mousePosition = new THREE.Vector2();

}



function getClicked3DPoint(evt) {
    evt.preventDefault();

    mousePosition.x = ((evt.clientX - canvasPosition.left) / canvas.width) * 2 - 1;
    mousePosition.y = -((evt.clientY - canvasPosition.top) / canvas.height) * 2 + 1;

    rayCaster.setFromCamera(mousePosition, camera);
    var intersects = rayCaster.intersectObjects(scene.getObjectByName('MyObj_s').children, true);

    if (intersects.length > 0)
        return intersects[0].point;
};


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

export default  AtomDropEventHandler;