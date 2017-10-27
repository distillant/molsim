
var React = require('react');
var ReactDOM = require('react-dom');

var Sphere2D =React.createClass({
    render: function(){
        var style;
        if (this.props.data.cpkHexColor && this.props.data.cpkHexColor.length >0) {
            style = {background: "radial-gradient(circle at 33px 33px, #" +this.props.data.cpkHexColor + ", #000)"};
        }
        else
            style={};
        return (
            <section className="stage" onclick={this.props.onclick}>
                <div>
                    <div className="atomic-number-display">{this.props.data.atomicNumber}</div>
                    <div className="atom-chooser-element-symbol">{this.props.data.symbol}</div>
                </div>

                <figure className="ball" style={style}><span className="shadow"></span></figure>
                <div className="atom-chooser-element-name">{this.props.data.name}</div>
            </section>
        )
    }
})
export default Sphere2D;

