import React from "react";
import Navbar from '../components/Navbar'
import APIInvoke from "../utils/APIInvoke";
import './PagoEditar.css'

class pagoEditar extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            factura: '',
            nombre: '',
            apellidos: '',
            documento: '',
            direccion: '',
            valor: ''
        }
    }

    async componentDidMount() {
        const pagoFactura = this.props.match.params.pagoFactura
        const response = await APIInvoke.invokeGET(`/api/v1/pago/${pagoFactura}`)
        this.setState({
            nombre: response.nombre,
            apellidos: response.apellidos,
            documento: response.documento,
            direccion: response.direccion,
            valor: response.valor            
        })
    }

    handleChange(e) {
        this.setState({
            nombre: e.target.value,
            apellidos: e.target.value,
            documento: e.target.value,
            direccion: e.target.value,
            valor: e.target.value
        });
    }

    async edit() {
        const data = {
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            documento: this.state.documento,
            direccion: this.state.direccion,
            valor: this.state.valor
        }

        const response = await APIInvoke.invokePUT(`/api/v1/pago`, data)
        if (response.Factura !== 0) {
            this.props.history.push(`/pago`)
        } else {
            console.log(response.message)
        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <div id="frm">
                    <div className="container">
                        <div id="frm-row" className="row justify-content-center align-items-center">
                            <div id="frm-column" className="col-md-6">
                                <div id="frm-box" className="col-md-12">
                                    <div id="frm-form" className="form">
                                        <h3 className="text-center text-info">Editar Perfil</h3>
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
                                            <label htmlFor="username" className="text-info">Valor a Pagar:</label><br />
                                            <input type="number" name="pagoFinal" id="pagoFinal" className="form-control"
                                                value={this.state.pagoFinal}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <br />
                                            <button onClick={this.edit.bind(this)} className="btn btn-info btn-md">
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
export default pagoEditar