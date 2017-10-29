/**
 * Created by patrick conroy on 9/9/17.
 */
import React, { Component } from 'react';

import './App.css';

class SystemComponent extends Component {
    render() {
        return (
            <div className="System">

            </div>

        );
    }
    setupScene() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var light = new THREE.AmbientLight(0xffffff,.5);
        var light1 = new THREE.PointLight(0xffffff,.5);

        scene.add(light);
        scene.add(light1);
        light1.position.set(200,200,200);


        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        camera.position.x = 0;
        camera.position.y = 10;
        camera.position.z = 40;

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
