import Atom from  './models/Atom';
import Molecule from  './models/Molecule';
import System from  './models/System';
import Bond from  './models/Bond';
import ELEMENTS from './data/ELEMENTS';


var firstTest = function(targetEl) {
    var system = new System(targetEl);
    var molecule=new Molecule();

    var atom0= new Atom(ELEMENTS[0]);
    atom0.updatePosition(0,-14,0);

    var atom1= new Atom(ELEMENTS[5]);
    var bond0= new Bond(atom0,atom1);
    bond0.updatePosition(0,-7,0);
    atom1.updatePosition(0,0,0);
    var atom2= new Atom(ELEMENTS[4]);
    atom2.updatePosition(0,14,0);
    var bond1= new Bond(atom1,atom2);
    bond1.updatePosition(0,7,0);
    molecule.addAtom(atom0);
    molecule.addBond(bond0);
    molecule.addAtom(atom1);
    molecule.addAtom(atom2);
    molecule.addBond(bond1);
    system.addMolecule(molecule);
    system.render();

};
export default firstTest;




