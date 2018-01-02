
var Molecule = function () {
    let _atoms = [];
    let _bonds = [];

    this.group = new THREE.Object3D();//create an empty container

    var spreadBond=function(totalBonds,index,bond,source,dest){
        var bondlength=10;
        //var bondAngle=Math.random()*(Math.PI*2);
        var bondAngle=(Math.PI*2)*((index+1)/totalBonds)
        console.log(JSON.stringify({bondAnge:bondAngle,index:index,bonds:totalBonds}))
        //var bondAngle=.333*(Math.PI/2);
        var destvx=bondlength*(Math.cos(bondAngle))
        var destvy=bondlength*(Math.sin(bondAngle))
        var destx=source._position.x + destvx;
        var desty=source._position.y + destvy;
        //bondMiddleX=((source._position.x+dest._position.x)/2);
        //bondMiddleY=((source._position.x+dest._position.x)/2);

        bond.rotate(bondAngle);
        dest.updatePosition(destx,desty,0);
        bond.updatePosition(source._position.x,source._position.y,0)

    }
    this.addAtom = function (atom) {
        _atoms.push(atom);
        this.group.add(atom.view.mesh);
    };

    this.addBond = function (totalBonds,index,bond, sourceKey, destKey) {
        var source=_atoms.find(function(atom){return (atom.key===sourceKey)});
        var dest=_atoms.find(function(atom){return (atom.key===destKey)})
        _bonds.push(bond);
        this.group.add(bond.cylinderMesh);
        spreadBond(totalBonds,index,bond,source,dest);

    };


    this._atoms=_atoms;
    this._bonds=_bonds;
};
export default Molecule;
    //});