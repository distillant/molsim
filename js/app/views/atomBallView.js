class AtomBallView {

    constructor (options){
        this._material = new THREE.MeshLambertMaterial({color: 0xF3FF00});
        this._radius = options.radius || 2;
        this._sphere = new THREE.SphereGeometry(this._radius, 20, 20);
        this._color= options.color || "white";
        this._material.color.set(this._color);
        this._position = options.position || {x:0,y:0,z:0};
        this._sphereMesh =new THREE.Mesh(this._sphere, this._material);
        this._sphereMesh.position.set(this._position.x, this._position.y, this._position.z);

    }
    get mesh (){
        return this._sphereMesh;
    }
    get position() {
        let _position=this._position;
        return {x:_position.x, y:_position.y,z:_position.z};
    }

    adjustPosition (offSetX, OffSetY, OffSetZ) {
        let _position=this._position;
        _position.x = _position.x + offSetX;
        _position.y = _position.y + OffSetY;
        _position.z = _position.z + OffSetZ;
        this._sphereMesh.position.set(_position.x, _position.y, _position.z);
    }

    set position (offsets) {
        let _position=this._position;
        _position.x =offsets.x;
        _position.y = offsets.y;
        _position.z = offsets.z;
        this._sphereMesh.position.set(_position.x, _position.y, _position.z);
    }

    set color(color)
    {
        this._color=color;
        this._material.color.set(color);
    }

}
export default AtomBallView;
