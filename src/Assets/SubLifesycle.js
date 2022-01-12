import React, { Component } from 'react'

class SubLifesycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("sate")
    }

    render() {
        return (
            <div>
                <h2>Component SUb Lifesycle</h2>
            </div>
        )
    }
}

export default SubLifesycle