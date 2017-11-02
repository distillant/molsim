import System from  './models/System';
import assembleMolecule from './models/molecule/assembleMolecule';


var firstTest = function(state,targetEl) {
    var system = new System({sceneSettings:state.sceneSettings, targetElementId:targetEl});
    //system.addMolecule(getSampleMolecule());
    system.molecule=assembleMolecule(state.defaultMolecule);
    system.addMolecule(system.molecule);


    system.render();
    return system;
};
export default firstTest;




