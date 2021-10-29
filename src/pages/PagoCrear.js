import React from "react";
import './PagoCrear.css'
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke'

class PagoCrear extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            nombre: '',
            apellidos: '',
            documento: '',
            direccion: '',
            valor: ''
        }
    }

    componentDidMount() {
        document.getElementById("nombre").focus()
        document.getElementById("apellidos")
        document.getElementById("documento")
        document.getElementById("direccion")
        document.getElementById("valor")
    }
    
    handleChange(e) {
        this.setState({
            nombre: e.target.value,
            apellidos: e.target.value,  
            documento: e.target.value,  
            direccion: e.target.value,
            valor: e.target.value
        })
    }

    async add() {
        const data = {
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            documento: this.state.documento,
            direccion: this.state.direccion,
            valor: this.state.valor
        }

        const response = await APIInvoke.invokePOST('/api/v1/pago', data)
        if (response.Factura !== 0) {
            this.props.history.push('/pago')
        } else {
            console.log(response.message)
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div id="frm">
                    <div className="container">
                        <div id="frm-row" className="row justify-content-center align-items-center">
                            <div id="frm-column" className="col-md-6">
                                <div id="frm-box" className="col-md-14">
                                    <div id="frm-form" className="form">
                                        <h3 className="text-center text-info">Crear Pago</h3>
                                        

                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Nombre:</label><br />
                                            <input type="text" name="nombre" id="nombre" className="form-control"
                                            value={this.state.nombre}
                                            onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Apellidos:</label><br />
                                            <input type="text" name="apellidos" id="apellidos" className="form-control"
                                            value={this.state.apellidos}
                                                onChange={this.handleChange.bind(this)}
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Documento:</label><br />
                                            <input type="number" name="documento" id="documento" className="form-control"
                                            value={this.state.documento}
                                            onChange={this.handleChange.bind(this)}
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Direccion:</label><br />
                                            <input type="text" name="direccion" id="direccion" className="form-control"
                                            value={this.state.direccion}
                                            onChange={this.handleChange.bind(this)}
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Valor:</label><br />
                                            <input type="number" name="valor" id="valor" className="form-control"
                                            value={this.state.valor}
                                            onChange={this.handleChange.bind(this)}
                                                />
                                        </div>
                                        <div className="form-group">
                                            <br />
                                            <button onClick={this.add.bind(this)} className="btn btn-warning btn-md">
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PagoCrear