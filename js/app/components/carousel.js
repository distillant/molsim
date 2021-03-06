import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import ELEMENTS from '../data/ELEMENTS';
import Sphere2D from '../views/Sphere2D';

import dropAtomHandler from '../../junk/atomChooserEvents';
/*
var createChildren= (n) => { ELEMENTS.map(function(element, index){
    return(<Sphere2D key={index} data={element}></Sphere2D>)
})};
*/

var Test= React.createClass ({
    getInitialState: function() {
        const selectAtom=this.props.actions.selectAtom;
        return {activeItemIndex : 8,
        children:ELEMENTS.map(function(element, index){
            return(<Sphere2D
                    key={index}
                    onclick={function(event){
                        selectAtom(element);
                        //dropAtomHandler(event, element);
                    }}
                    data={element}>
            </Sphere2D>)
        })
    }; },

    changeActiveItem: function (newIndex) {
        this.setState({activeItemIndex:newIndex});

        return this.state;
        },

    render: function (){

        var that=this;
        var activeItemIndex=that.state.activeItemIndex;
       /*var children=ELEMENTS.map(function(element, index){
            return(<Sphere2D key={index} data={element}></Sphere2D>)
        })*/



        return (
            <ItemsCarousel
                // Placeholder configurations
                enablePlaceholder
                numberOfPlaceholderItems={5}
                minimumPlaceholderTime={1000}
                placeholderItem={<div style={{ height: 130, background: '#900' }}>Placeholder</div>}
                slidesToScroll={4}
                // Carousel configurations
                numberOfCards={15}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                // Active item configurations
                requestToChangeActive={that.changeActiveItem}
                activeItemIndex={this.state.activeItemIndex}
                activePosition={'center'}

                chevronWidth={24}
                rightChevron={<span className="carousel-paging-control"> &gt; </span>}
                leftChevron={<span className="carousel-paging-control"> &lt; </span>}
                outsideChevron={false}
            >
                {this.state.children}

            </ItemsCarousel>
        );
    }
});
export default Test