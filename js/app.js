/**
 * Created by patrick conroy on 9/21/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
require('../lib/three.module');
import AtomSelector from './app/components/atomSelector';
import Carousel from './app/components/carousel';

//window.molAppState={};
var material= new THREE.MeshLambertMaterial({color: 0xF3FF00});
//var material = new THREE.MeshNormalMaterial({wireframe: true});
//window.molAppState.material=material;
import implementation from  './app/implementation';

implementation("contentPanel");

var App = React.createClass({
    render: function () {
        return (
            <div>

                <Carousel></Carousel>
            </div>
        );
    }
});
ReactDOM.render(<App/>,  document.getElementById("atomChooserSpace"));

//new StarshipHUD();