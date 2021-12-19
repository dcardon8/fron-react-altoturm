import React, { Component } from "react";

class UpdateUsers extends Component {
    render() {
        return (
            <div className="updateFields">
                <form>

                    <table>
                        <caption className="col-3 offset-xl-5">¿Actualizar datos?</caption>
                        <tr>
                            <td><input type="text" name="IdentificationText" id="IdentificationText" className="form-control" placeholder="Identificación" required/> </td>
                            <td><input type="text" name="NameText" id="NameText" className="form-control" placeholder="Nombre" required/></td>
                            <td><input type="text" name="AddresText" id="AddressText" className="form-control" placeholder="Dirección" required/></td>
                            <td><input type="tel" name="cellPhoneText" id="cellPhoneText" className="form-control" pattern="[0-9]{10}" maxlength="10" placeholder="Celular" required/></td>
                        </tr>
                        <tr>
                            <td><input type="email" name="EmailText" id="EmailText" className="form-control" placeholder="Email" required/></td>
                            <td><input type="password" id="contraNuevo1" pattern=".{6,}" className="form-control" placeholder="Contraseña" required/></td>
                            <td><input type="text" name="ZonaText" id="ZonaText" className="form-control" list="ZonasTurmeque" placeholder="Zona" required/></td>
                            <td><input type="text" name="RolText" id="RolText" className="form-control" list="RolList" placeholder="Tipo" required/></td>
                        </tr>
                    </table>
                    <br/>
                </form>
            </div>
        )
    }
}