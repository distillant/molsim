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
import SidePanel from './app/components/sidepanel/sidePanel';


var App = React.createClass({
    onComponentWillMount(){
        window.addEventListener('resize', function(event) {
            this.render();
        });
    },
    getDimensions:function(){
      const WH=window.innerHeight;
      const WW=window.innerWidth;
      const AtomChooserHeight=124;
      const sidebarWidth=250+7;
      return{
        contentPanelHeight:(WH-AtomChooserHeight) + "px",
        contentPanelWidth:(WW-sidebarWidth) + "px"
      };
    },
    render: function () {
        var dimensions= this.getDimensions();
        return (
            <div>
                <div id="contentPanel" style={{"width":dimensions.contentPanelWidth, "height":dimensions.contentPanelHeight}} ></div>
                <div id="sidepanelSpace" style={{"height":dimensions.contentPanelHeight}}>
                    <SidePanel data={state.displayData} ></SidePanel>
                </div>
                <div id="atomChooserSpace">
                    <Carousel></Carousel>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<App/>,  document.getElementById("app"));
window.molSystem=implementation(state,"contentPanel");
