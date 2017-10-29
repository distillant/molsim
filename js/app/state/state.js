var getInitialState = function () {
    return {
        moleculeSettings:{
            defaultBondColor:"yellow"
        },
        sceneSettings: {
            camera: {
                depthOfField: 75,
                ratio: (5 / 7), //made to be overridden
                near: .1,
                far: 1000
            },
            lights: [
                {
                    type: 'AmbientLight',
                    color: 0xffffff,
                    intensity: .5,
                    position: {
                        x: 200,
                        y: 200,
                        z: 200
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
        },
        defaultAtom:{
            atoms:[{elementName:"hydrogen", key:"1"},
                {elementName:"oxygen", key:"2"},
                {elementName:"carbon", key:"3"}
                ],
            bonds:[{type:"covalent",magnitude:1, source:"1", dest:"2" },
                {type:"covalent",magnitude:1, source:"2", dest:"3" }
            ]
        }
    };
};

export default getInitialState;
