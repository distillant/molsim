/**
 * Created by patrick conroy on 9/21/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
require('../lib/three.module');
//import AtomSelector from './app/components/atomSelector';
import Carousel from './app/components/carousel';
import State from "./app/state/state";
var state=new State();
import implementation from  './app/implementation';



var App = React.createClass({
    render: function () {
        return (
            <div>
                <div id="contentPanel"></div>
                <div id="atomChooserSpace">
                    <Carousel></Carousel>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<App/>,  document.getElementById("app"));
window.molSystem=implementation(state,"contentPanel");
