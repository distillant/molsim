//define(['lib/three.min.js'], function (THREE) {



    var Bond = function () {
        var material = new THREE.MeshLambertMaterial({color: 0xF3FF00});;
        //cyl
        var cylinder = new THREE.CylinderGeometry(0.25, 0.25, 10, 32);
        var cylinderMesh = new THREE.Mesh(cylinder, material);
        var _position = {x: 0, y: 0, z: 0};
        //cylinderMesh.position.set(0,7,0);
        this.cylinderMesh = cylinderMesh;
        this.updatePosition = function (offSetX, OffSetY, OffSetZ) {
            _position.x = _position.x + offSetX;
            _position.y = _position.y + OffSetY;
            _position.z = _position.z + OffSetZ;
            cylinderMesh.position.set(_position.x, _position.y, _position.z);
        };

    };
export default Bond;
//});