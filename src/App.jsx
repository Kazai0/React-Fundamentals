/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import First from './components/FIrst'
import WithParams from './components/WithParam'
import WithChildrens from './components/WithChildrens'
import Card from './components/layout/Card'

export default (props)=>(
    <div className='App'>
        
        <Card thisTitle="first Component">
            <First/>
        </Card>
        <Card thisTitle="With Params">
        <WithParams 
            thisTitle="This is title" 
            thisSubTitle="this is subtitle"
        />
        <WithParams 
            thisTitle="This is title 2" 
            thisSubTitle="this is subtitle 2"
        />
        </Card>
        <Card thisTitle="first Component">
            <WithChildrens>
                <ul>
                    <li>Ana</li>
                    <li>Lia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </WithChildrens> 
        </Card>

    </div>
)