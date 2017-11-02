/**
 * Created by patrick conroy on 11/1/17.
 */

import React from 'react';
//import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });
import {mount, shallow} from 'enzyme';
import SidePanel from './sidePanel'


test('sidePanel is a function', () => {
    expect(typeof SidePanel).toBe('function');


});

test('side panel throws an error when no object passed in', () => {
    expect(function(){SidePanel()}).toThrow()
});


test('side panel returns <div />when executed with an empty array', () => {
    expect(
        (shallow(SidePanel({data:{}}))).type()).toBe("div");
});

test('sidePanel returns returns input inside a div when object with propery is passed into ',() =>{
    var sampleData={fieldA:"cat", fieldB:1};
    expect(mount(SidePanel({data:sampleData})).contains("input"));
});


