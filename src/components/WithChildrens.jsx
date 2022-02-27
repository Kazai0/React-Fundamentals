/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
    <div>
        <h2> The Chindrens :</h2>
        <div>
            {props.children}
        </div>
    </div>