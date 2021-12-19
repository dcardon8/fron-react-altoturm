import React from "react";

class CrearUsuario extends React.Component {
    render() {
        return (
            <div>
                <h2>Crear Usuario</h2>
                <form>
                    <table>
                        <tr>
                            <td><label for="Nombre">Nombre</label></td>
                            <td><input type="text" name="Nombre" id="nameNewUser" className="form-control" required /></td>
                        </tr>
                        <tr>
                            <td><label for="identification">Identificación</label></td>
                            <td><input type="text" name="identification" id="identification" className="form-control" required /></td>
                        </tr>
                        <tr>
                            <td><label for="birthday">Fecha nacimiento</label></td>
                            <td><input type="date" name="birthday" id="birthday" min="1900-00-00" max="2021-12-12" className="form-control" required /></td>
                        </tr>
                        <tr>
                            <td><label for="monthbday">Mes nacimiento</label></td>
                            <td><input type="text" name="monthbday" id="monthbday" className="form-control" list="meses" required /></td>
                            <datalist id="meses">
                                <option value="1">Enero</option>
                                <option value="2">Febrero</option>
                                <option value="3">Marzo</option>
                                <option value="4">Abril</option>
                                <option value="5">Mayo</option>
                                <option value="6">Junio</option>
                                <option value="7">Julio</option>
                                <option value="8">Agosto</option>
                                <option value="9">Septiembre</option>
                                <option value="10">Octubre</option>
                                <option value="12">Noviembre</option>
                                <option value="12">Diciembre</option>
                            </datalist>
                        </tr>
                        <tr>
                            <td><label for="UserAddress">Dirección</label></td>
                            <td><input type="text" name="UserAddress" id="UserAddress" className="form-control" required /></td>
                        </tr>
                        <tr>
                            <td><label for="cellPhone">Celular</label></td>
                            <td><input type="tel" name="cellPhone" id="cellPhone" className="form-control" pattern="[0-9]{10}"
                                maxlength="10" placeholder="ex: 1234567890" required /></td>
                        </tr>
                        <tr>
                            <td><label for="Email">E-mail</label></td>
                            <td><input type="email" name="Email" id="emailNewUser" className="form-control" required /></td>
                        </tr>
                        <tr>
                            <td><label for="Zona">Zona</label></td>
                            <td><input type="text" name="Zona" id="Zona" className="form-control" list="ZonasTurmeque" required />
                            </td>
                            <datalist id="ZonasTurmeque">
                                <option value="ZONA 1"></option>
                                <option value="ZONA 2"></option>
                                <option value="ZONA 3"></option>
                                <option value="ZONA 4"></option>
                                <option value="ZONA 5"></option>
                                <option value="ZONA 6"></option>
                                <option value="ZONA 7"></option>
                                <option value="ZONA 8"></option>
                                <option value="ZONA 9"></option>
                                <option value="ZONA 10"></option>
                                <option value="ZONA 11"></option>
                                <option value="ZONA 12"></option>
                                <option value="ZONA 13"></option>
                                <option value="ZONA 14"></option>
                                <option value="ZONA 15"></option>
                                <option value="ZONA 16"></option>
                                <option value="ZONA 17"></option>
                            </datalist>
                        </tr>
                        <tr>
                            <td><label for="Rol">Tipo o Rol</label></td>
                            <td><input type="text" name="Rol" id="Rol" className="form-control" list="RolList" required /></td>
                            <datalist id="RolList">
                                <option value="COORD">Coordinador</option>
                                <option value="ASE">Asesor Comercial</option>
                            </datalist>
                        </tr>

                        <tr>
                            <td><label for="Password">Contraseña</label></td>
                            <td><input type="password" id="contraNuevo1" pattern=".{6,}" className="form-control" required /></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <p id="alertContra">La contraseña debe tener mínimo 6 caracteres</p>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="confirmPassword">Confirmar tu contraseña</label></td>
                            <td><input type="password" id="contraNuevo2" className="form-control" pattern=".{6,}" required /></td>
                        </tr>
                    </table>
                    <br />
                    <div class="Center">
                        <button class="btn btn-dark btn-lg action-button col-2 offset-xl-0" onclick="create()">Crear</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default CrearUsuario;