var sceneSettings= {
    camera: {
        type:"PerspectiveCamera",
            depthOfField: 75,
            ratio: (5 / 7), //made to be overridden
            near: .1,
            far: 1000,
            position:{x:0, y:-1, z: 40 }
    },
    lights: [
        {
            type: 'AmbientLight',
            color: 0xffffff,
            intensity: .5,
            position: {
                x: 0,
                y: 20,
                z: -60
            }
        },
        {
            type: 'PointLight',
            color: 0xffffff,
            intensity: .5,
            position: {
                x: 200,
                y: 200,
                z: 200
            }
        }
    ]
};


export default function scene(state = sceneSettings, action) {
    switch(action) {
        default:
            return state;
    }
}