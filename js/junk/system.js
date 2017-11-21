/**
 * Created by patrick conroy on 9/9/17.
 */
import React, { Component } from 'react';

import './App.css';

class SystemComponent extends Component {

    setupScene(props) {
        const targetElementId=props.targetElementId;
        const sceneSettings =props.sceneSettings;
        var scene = new THREE.Scene();
        var c1=sceneSettings.camera;
        const PERSPECTIVE=window.innerWidth / window.innerHeight;

        var camera = new THREE.PerspectiveCamera(c1.depthOfField, PERSPECTIVE, c1.near, c1.far);
        camera.setPosition(c1.position.x,c1.position.y,c1.position.z)
        scene.add(camera);

        sceneSettings.lights.forEach(function(light)
        {
            var light=new THREE[light.type](light.color,light.intensity);
            if (light.position)
            {
                light.position.set(light.position.x,light.position.y,light.position.z);
            }
            scene.add(light);
        });

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);



        var render = function () {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        };
        this.render = render;
        this.addMolecule = function (molecule) {
            scene.add(molecule.group);
        }


    }
    update()
}

export default SystemComponent;
