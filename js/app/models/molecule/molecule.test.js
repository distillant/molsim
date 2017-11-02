/**
 * Created by patrick conroy on 11/1/17.
 */
import * as THREE from '../../../../lib/Three.js'
window.THREE=THREE;
import Molecule from './Molecule'

test('Instantiating Molecule creates an object', () => {
    expect(typeof new Molecule()).toBe('object');

});
test('Molecule creates an object with a _atoms property which is array', () => {
    expect(Array.isArray((new Molecule())._atoms)).toBe(true);
});


