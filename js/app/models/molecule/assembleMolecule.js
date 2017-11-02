/**
 * Created by patrick conroy on 10/29/17.
 */

import Molecule from './Molecule';
import Atom from '../Atom';
import Bond from '../Bond';
import ELEMENTS from '../../data/ELEMENTS';


var assembleMolecule=function(moleculeDef){

    var molecule=new Molecule();
    moleculeDef.atoms.forEach(function(atomDef){
        var element =ELEMENTS[atomDef.atomicNumber-1];
        var atom= new Atom(element);
        atom.key=atomDef.key;
        molecule.addAtom(atom);
    })
    moleculeDef.bonds.forEach(function(bondDef){

        var bond= new Bond(bondDef);

        molecule.addBond(bond,bondDef.source, bondDef.dest);
    })
    return molecule;
};

export default assembleMolecule;
