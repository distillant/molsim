//define(['lib/three.min.js'], function (THREE) {

    var Molecule = function () {
        let _atoms = [];
        let _bonds = [];

        this.group = new THREE.Object3D();//create an empty container


        this.addAtom = function (atom) {
            _atoms.push(atom);
            this.group.add(atom.view.mesh);
        };
        this.addBond = function (bond) {
            _bonds.push(bond);
            this.group.add(bond.cylinderMesh);
        };

    };
    export default Molecule;
//});