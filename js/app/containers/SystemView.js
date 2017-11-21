var React = require('react');
import System from  '../models/System';
import assembleMolecule from '../models/molecule/assembleMolecule';

var SystemView = React.createClass({
    componentDidMount(){

        var state=this.props;
        var system = new System({sceneSettings:state.sceneSettings, targetElementId:"contentPanel"});
        //system.addMolecule(getSampleMolecule());
        system.molecule=assembleMolecule(state.defaultMolecule);
        system.addMolecule(system.molecule);
        system.render();
        return system;
    },
    render: function () {
        return (
            <div id="contentPanel" style={this.props.style}></div>
        );
    }
});
export default SystemView;