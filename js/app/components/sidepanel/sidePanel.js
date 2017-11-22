/**
 * Created by patrick conroy on 11/1/17.
 */

import React from 'react';
//sidebar displays literal data in rows of disabled input boxes
function sidePanel(props) {
    return(
        <table>
            { Object.keys(props.data).map((fieldName, index) => {return(
                <tr key={fieldName} >
                    <td><b>{fieldName}:</b> </td>
                    <td>{props.data[fieldName]}</td>

                </tr>)
            })
            }

        </table>
    )
};



export default sidePanel;