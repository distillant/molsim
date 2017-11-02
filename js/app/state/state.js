var getInitialState = function () {
    return {
        moleculeSettings:{
            defaultBondColor:"yellow"
        },
        sceneSettings: {
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
        },
        defaultMolecule:{
            atoms:[,
                {elementName:"oxygen", atomicNumber:8, key:"1"},
                {elementName:"hydrogen", atomicNumber:1, key:"2"},
                {elementName:"carbon", atomicNumber:6, key:"3"}
                ],
            bonds:[{type:"covalent",magnitude:1, source:"1", dest:"2" },
                {type:"covalent",magnitude:1, source:"2", dest:"3" }
            ],

        },
        displayData:{}
    };
};

export default getInitialState;
