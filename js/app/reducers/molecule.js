import * as types from '../constants/atomChooser';


const defaultMolecule={
    atoms:[,
        {elementName:"oxygen", atomicNumber:8, key:"1"},
        {elementName:"hydrogen", atomicNumber:1, key:"2"},
        {elementName:"carbon", atomicNumber:6, key:"3"}
    ],
        bonds:[{type:"covalent",magnitude:1, source:"1", dest:"2" },
        {type:"covalent",magnitude:1, source:"2", dest:"3" }
    ]
};

export default function molecule(state = defaultMolecule, action) {
    switch (action.type) {
        case types.SELECT_ATOM:
            var newMol= state;
            //filter out just two keys from element data to use.
            var newAtom= (({elementName,atomicNumber })=>({elementName:name,atomicNumber }))(action.data);
            newAtom.key=Math.random().toString();
            newMol.atoms.push(newAtom);
            return newMol;
        case types.REMOVE_ATOM:
            return stateat.filter(atom =>
                atom.id !== action.id
            )

        /*case FOCUS_ATOM:
            return state.map(todo =>
                todo.id === action.id ?
                    { ...todo, text: action.text } :
                    todo
            )
*/
        default:
            return state
    }
}