import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from '../utils/APIInvoke'
import { Link } from 'react-router-dom'

class PagoAdmin extends React.Component {
    constructor(args) {
        super(args)
        this.state = {
            pagos: []
        }
    }

    async componentDidMount() {
        const response = await APIInvoke.invokeGET("/api/v1/pago")
        this.setState({
            pagos: response
        })
    }

    async remove(e, pago) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/api/v1/pago/${pago.factura}`)
    }

    async componentDidUpdate() {
        const response = await APIInvoke.invokeGET("/api/v1/pago")
        this.setState({
            pagos: response
        })
    }

    render() {

        const arregloPagos = this.state.pagos

        return (
            <div>
                <Navbar />
                <br />
                <div className="main container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/Pago-crear" className="btn btn-warning">
                            Crear
                            </Link>
                            <br/><br/>
                            <table class="table table-dark text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Factura</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellidos</th>
                                        <th scope="col">Documento</th>
                                        <th scope="col">Direccion</th>
                                        <th scope="col">Valor</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arregloPagos.map(
                                            pago =>
                                                <tr key={pago.factura}>                                                                                                       <td>{pago.factura}</td>
                                                    <td>{pago.nombre}</td>
                                                    <td>{pago.apellidos}</td>
                                                    <td>{pago.documento}</td>
                                                    <td>{pago.direccion}</td>
                                                    <td>{pago.valor}</td>
                                                    <td>
                                                    <Link to={`/PagoEditar/${pago.factura}`} className="btn btn-info btn-sm" title="Editar">
                                                                    Editar
                                                                    <i className="fa fa-edit"></i>
                                                                </Link>
                                                                &nbsp;&nbsp;
                                                        &nbsp;&nbsp;
                                                        <button onClick={(e) => this.remove(e, pago.factura)} className="btn btn-danger btn-sm" title="Eliminar">
                                                                    Eliminar
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                    </td>
                                                </tr>
                                        )
                                    }


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default PagoAdmin