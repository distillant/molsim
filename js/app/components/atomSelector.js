
var React = require('react');
import ELEMENTS from '../data/ELEMENTS';
import Sphere2D from '../views/Sphere2D';

'use strict';

var React = require('react');

var AtomSelector = React.createClass({
    render: function () {
        return (
            <div>
                {ELEMENTS.map(function(element, index){
                    return(<Sphere2D key={index} data={element}></Sphere2D>)
                })}
            </div>
        );
    }
});
export default AtomSelector;