/**
 * Created by patrick conroy on 9/21/17.
 */
var React = require('react');
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


require('../../../lib/three.module');
import Carousel from '../components/carousel';

import SidePanel from '../components/sidepanel/sidePanel';

//var ReactDOM = require('react-dom');

import * as molActions from '../actions';

import SystemView from './SystemView';
/*
const  App =({props,actions }) => (
    <div>
        <SystemView style={{"width":props.dimensions.contentPanelWidth, "height":props.dimensions.contentPanelHeight}} sceneSettings={props.scene} defaultMolecule={ props.molecule}></SystemView>
        <div id="sidepanelSpace"  style={{"height":props.dimensions.contentPanelHeight}}>
            <SidePanel data={props.selectedAtom} ></SidePanel>
        </div>
        <div id="atomChooserSpace" >
            <Carousel actions={{selectAtom:actions.selectAtom}}></Carousel>
        </div>
    </div>
)*/


var App = React.createClass({
    updateDimensions:function(){
        this.props.actions.resize()},
    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    },
    render: function () {
        var props=this.props.props;
        var actions=this.props.actions;
        return (
            <div>
                <SystemView style={{"width":props.dimensions.contentPanelWidth, "height":props.dimensions.contentPanelHeight}} sceneSettings={props.scene} defaultMolecule={ props.molecule}></SystemView>
                <div id="sidepanelSpace"  style={{"height":props.dimensions.contentPanelHeight}}>
                    <SidePanel data={props.selectedAtom} ></SidePanel>
                </div>
                <div id="atomChooserSpace" >
                    <Carousel actions={{selectAtom:actions.selectAtom}}></Carousel>
                </div>
            </div>
        );
    }
});

/* need to change App to component to allow this; componentDidMount= () => {

}*/

const mapStateToProps = state => ({
    props: state
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(molActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
