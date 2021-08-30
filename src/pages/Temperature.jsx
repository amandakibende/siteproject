import React, { Component } from 'react'

class Temperature extends Component {

    state ={
        temperature : 10
    }

    render() {
        return (

            <div>
                <h1>Temperature!</h1>
            <input class="input" type="text" placeholder="Type here"></input>
            </div>
        )
    }
}

export default Temperature;
