var rayCaster,mousePosition;

var setupPlane=function(scene){
    var geometry = new THREE.PlaneGeometry( 200, 30, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    //material.transparent = true;
    var plane = new THREE.Mesh( geometry, material );

   scene.add( plane );
    rayCaster = new THREE.Raycaster();
    mousePosition = new THREE.Vector2();

};


function getClicked3DPoint(evt) {
    evt.preventDefault();

    mousePosition.x = ((evt.clientX - canvasPosition.left) / canvas.width) * 2 - 1;
    mousePosition.y = -((evt.clientY - canvasPosition.top) / canvas.height) * 2 + 1;

    rayCaster.setFromCamera(mousePosition, camera);
    var intersects = rayCaster.intersectObjects(scene.getObjectByName('MyObj_s').children, true);

    if (intersects.length > 0)
        return intersects[0].point;
};

export {setupPlane, getClicked3DPoint};

