var React = require('react');
import System from  '../models/System';
import assembleMolecule from '../models/molecule/assembleMolecule';

var SystemView = React.createClass({
    _system:null,
    count:0,
    componentDidMount(){
        var state=this.props;
        var system = new System({sceneSettings:state.sceneSettings, targetElementId:"contentPanel"});
        //system.addMolecule(getSampleMolecule());
        system.molecule=assembleMolecule(state.defaultMolecule);
        system.addMolecule(system.molecule);
        system.render();
        this._system=system;
       // return system;
    },
    resetMolecule(){
        this._system.clear();
        var newMol=assembleMolecule(this.props.defaultMolecule);
        this._system.addMolecule(newMol);
        this._system.render();
    },
    render: function () {
        if (this.count >0)
        {
            this.resetMolecule();
        }
        this.count++;
        return (
            <div id="contentPanel" style={this.props.style}></div>
        );
    }
});
export default SystemView;