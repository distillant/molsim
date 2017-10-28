/*
var React = require('react');
import Atom from './models/Atom.js';
//import Bond from './models/Bond';
import Molecule from './models/Molecule';
import System from './models/System';
import ELEMENTS from './data/ELEMENTS';

var CreateCage=function(molecule){
    var deg90= Math.PI/4;
    var cubeWidth=10;
    var offset= cubeWidth/2;
    var bars= [
        [offset,0,0,0,0,-deg90],
        [-offset,0,0,0,-deg90,0],
        [0,-offset,0,-deg90,0,0],
        [0,offset,0,-deg90,0,0]
    ];
    var Bar=function(){
        var material = window.molAppState.material.clone();
        material.color.set("red");

        var cylinder = new THREE.CylinderGeometry(0.25, 0.25, 10, 32);
        var cylinderMesh = new THREE.Mesh(cylinder, material);
        var _position = {x: 0, y: 0, z: 0};
       // cylinderMesh.position.set(0,7,0);
        this.cylinderMesh = cylinderMesh;
        this.updatePosition = function (offSetX, OffSetY, OffSetZ, rotatex, rotatey, rotatez) {
            _position.x = _position.x + offSetX;
            _position.y = _position.y + OffSetY;
            _position.z = _position.z + OffSetZ;
            cylinderMesh.position.set(_position.x, _position.y, _position.z);
            cylinderMesh.rotation.x +=rotatex;
            cylinderMesh.rotation.y +=rotatey;
            cylinderMesh.rotation.z +=rotatez;
        };
    }
    for(var bar in bars)
    {
        var myBar=new Bar();
        myBar.updatePosition.apply(this,bars[bar]);
        molecule.addBond(myBar)
    }
};

var atomBox = React.createClass({
    render: function () {
          return (
              <div id="atom-chooser">
                  <div id="chooserLeftArrow"></div>
                      <div>
                          <div>sphere</div>
                          <div>Title</div>
                      </div>
                  <div id="chooserRightArrow"></div>
              </div>
          )
    }
});

var createAtomChooser = function (targetEl) {
    var system = new System(targetEl);
    var molecule = new Molecule();
    var currentXPos = 0;
    var horizontalSpace = 14;


    for (var element in ELEMENTS) {
        var atom = new Atom(ELEMENTS[element]);
        currentXPos += horizontalSpace;
        atom.updatePosition(currentXPos, 0, 0);
        molecule.addAtom(atom);

    }
    CreateCage(molecule);
    system.addMolecule(molecule);
    system.render();
};

export default createAtomChooser;
*/