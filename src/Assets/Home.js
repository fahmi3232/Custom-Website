import React, { Component } from 'react'
import Operan from './Operan';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            makanan : "Bakso",
            namaPelanggan: "Fahmi"
        }
    }

    gantiMakanan = (nama_makanan) => {
        this.setState({
            makanan : nama_makanan
        })
    }
    render() {
        return (
            <div>
                <h2>Nama Pelanggan = {this.state.namaPelanggan}</h2>
                <h3>{this.state.makanan}</h3>
                <button onClick={() => this.gantiMakanan("nasi goreng")}>Change</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
