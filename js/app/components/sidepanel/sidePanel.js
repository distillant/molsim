/**
 * Created by patrick conroy on 11/1/17.
 */

import React from 'react';
//sidebar displays literal data in rows of disabled input boxes
function sidePanel(props) {
    return(
        <div>
            { Object.keys(props.data).map((fieldName, index) => {return(
                <div key={fieldName} >
                    <span>{fieldName}: </span>
                    <input disabled="true" id={fieldName} value={props.data[fieldName]}></input>
                </div>)
            })
            }

        </div>
    )
};



export default sidePanel;