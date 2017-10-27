var StickView () {
    var material = window.molAppState.material.clone();
    var _color =  window.molAppState.defaultBondColor;
    this.color(_color);
    //cyl
    var cylinder = new THREE.CylinderGeometry(0.25, 0.25, 10, 32);
    var cylinderMesh = new THREE.Mesh(cylinder, material);
    var _position = {x: 0, y: 0, z: 0};
    //cylinderMesh.position.set(0,7,0);
    this.cylinderMesh = cylinderMesh;

    set color=function(color)
    {
        _color=color;
        material.color.set(_color)
    }
    set yRotation(yRotation){
        cylinderMesh.rotation;
    }
    this.updatePosition = function (offSetX, OffSetY, OffSetZ) {
        _position.x = _position.x + offSetX;
        _position.y = _position.y + OffSetY;
        _position.z = _position.z + OffSetZ;
        cylinderMesh.position.set(_position.x, _position.y, _position.z);
    };
}

export default StickView;