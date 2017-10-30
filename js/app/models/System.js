var System = function (props) {
   // setupScene(props) {
        var targetEl=document.getElementById(props.targetElementId);
        const sceneSettings =props.sceneSettings;
        var scene = new THREE.Scene();
        var c1=sceneSettings.camera;
        const PERSPECTIVE=targetEl.offsetWidth / targetEl.offsetHeight;

        var camera = new THREE.PerspectiveCamera(c1.depthOfField, PERSPECTIVE, c1.near, c1.far);
        //camera.position(c1.position.x,c1.position.y,c1.position.z)
        camera.position.x = c1.position.x;
        camera.position.y = c1.position.y;
        camera.position.z = c1.position.z;
        scene.add(camera);

        sceneSettings.lights.forEach(function(lightItem)
        {
            var light=new THREE[lightItem.type](lightItem.color,lightItem.intensity);
            if (lightItem.position)
            {
                light.position.set(lightItem.position.x,lightItem.position.y,lightItem.position.z);
            }
            scene.add(light);
        });
        this.scene=scene;

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(targetEl.offsetWidth, targetEl.offsetHeight);
        targetEl.appendChild(renderer.domElement);


        var render = function () {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        };
        this.render = render;
        this.addMolecule = function (molecule) {
            scene.add(molecule.group);
        }
        this.addAtom = function (atom) {
            scene.add(atom.view.mesh);
            this.render();

        }

///////////////
///// old code below
/////



       // var targetEl=document.getElementById(targetElementId)
   /* var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, targetEl.offsetWidth / targetEl.offsetHeight, 0.1, 1000);

    var light = new THREE.AmbientLight(0xffffff,.5);
    var light1 = new THREE.PointLight(0xffffff,.5);

    scene.add(light);
    scene.add(light1);
    light1.position.set(200,200,200);


    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(targetEl.offsetWidth, targetEl.offsetHeight);
*/

    /**********************************
     ET HUM! Magic Starts below
     *********************************/

    targetEl.appendChild(renderer.domElement);
/*
    camera.position.x = 0;
    camera.position.y = 10;
    camera.position.z = 40;

    this.scene=scene;
    var render = function () {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    };*/
    /*this.render = render;
    this.addMolecule = function (molecule) {
        scene.add(molecule.group);
    }
    this.addAtom = function (atom) {
        scene.add(atom.view.mesh);
        this.render();

    }*/
};
export default System;
