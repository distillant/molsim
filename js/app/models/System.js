
require('../../../lib/TrackballControls')
require('../../../lib/Detector');
var setupControls=function(camera,eventHandler){
    var controls = new THREE.TrackballControls( camera );
    controls.rotateSpeed = 50.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [ 65, 83, 68 ];
    controls.addEventListener( 'change', eventHandler );
    return controls;
}

var addCamera=function(c1, targetEl,scene){
    const PERSPECTIVE=targetEl.offsetWidth / targetEl.offsetHeight;

    var camera = new THREE.PerspectiveCamera(c1.depthOfField, PERSPECTIVE, c1.near, c1.far);
    //camera.position(c1.position.x,c1.position.y,c1.position.z)
    camera.position.x = c1.position.x;
    camera.position.y = c1.position.y;
    camera.position.z = c1.position.z;
    scene.add(camera);
    return camera;
}
var addLights=function(lights,scene){
    lights.forEach(function(lightItem)
    {
        var light=new THREE[lightItem.type](lightItem.color,lightItem.intensity);
        if (lightItem.position)
        {
            light.position.set(lightItem.position.x,lightItem.position.y,lightItem.position.z);
        }
        scene.add(light);
    });
};

var System = function (props) {
   // setupScene(props) {

        var targetEl=document.getElementById(props.targetElementId);
        const sceneSettings =props.sceneSettings;
        var scene = new THREE.Scene();

        addLights(sceneSettings.lights, scene);
        var camera=addCamera(sceneSettings.camera, targetEl,scene);

        this.scene=scene;

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(targetEl.offsetWidth, targetEl.offsetHeight);
        targetEl.appendChild(renderer.domElement);


        var render = function () {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        };
        this.render = render;
        var controls=setupControls(camera,function(){render()});

        this.molecules=[];
        this.addMolecule = function (molecule) {
            this.molecules.push(molecule)
            scene.add(molecule.group);
        }
        this.clear = function(){
            while(this.molecules.length > 0){
                scene.remove(this.molecules.pop().group);
            }
        };
        this.addAtom = function (atom) {
            scene.add(atom.view.mesh);
            this.render();

        }
        function animate() {
            requestAnimationFrame( animate );
            controls.update();
        }
        animate();
        targetEl.appendChild(renderer.domElement);

};
export default System;
