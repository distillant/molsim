import AtomBallView from '../views/atomBallView';

var Atom = function (element) {

    this._position = {x: 0, y: 0, z: 0};
    var _atomView=new AtomBallView({color:"#"+element.cpkHexColor, radius:element.atomicRadius/(37/2),position:this._position});
    this.view=_atomView;
    var _charge = 0;


    this.updatePosition = function (offSetX, OffSetY, OffSetZ) {
        let _position=this._position;
        _position.x = _position.x + offSetX;
        _position.y = _position.y + OffSetY;
        _position.z = _position.z + OffSetZ;
        _atomView.position={x:_position.x, y:_position.y, z:_position.z};
    };
}
export default Atom;
