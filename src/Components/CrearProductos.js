import React from "react";

class CrearProductos extends React.Component {
    render() {
        return (
            <div>
                <h2>Nuevo Producto</h2>
                <form>
                    <table>
                        <tr>
                            <td><label for="Referencia">Referencia</label></td>
                            <td><input type="text" name="Referencia" id="Referencia" class="form-control" required/></td>
                        </tr>
                        <tr>
                            <td><label for="Categoria">Categoria</label></td>
                            <td><input type="text" name="Categoria" id="Categoria" class="form-control" required/></td>
                        </tr>
                        <tr>
                            <td><label for="Talla">Talla</label></td>
                            <td><input type="text" name="Talla" id="Talla" class="form-control" required/></td>
                        </tr>
                        <tr>
                            <td><label for="Descripción">Descripción</label></td>
                            <td><input type="text" name="Descripción" id="Descripción" class="form-control" required/></td>
                        </tr>
                        <tr>
                            <td><label for="Disponibilidad">Disponibilidad</label></td>
                            <td>
                                <input type="text" name="Disponibilidad" id="Disponibilidad" class="form-control"
                                    list="DisponibilidadList" required/>
                                    <datalist id="DisponibilidadList">
                                        <option value="true">Sí</option>
                                        <option value="false">No</option>
                                    </datalist>
                            </td>
                        </tr>
                        <tr>
                            <td><label for="Precio">Precio</label></td>
                            <td><input type="number" name="Precio" id="Precio" class="form-control" required/></td>
                        </tr>
                        <tr>
                            <td><label for="Cantidad">Cantidad</label></td>
                            <td><input type="number" name="Cantidad" id="Cantidad" min="0" class="form-control" required/></td>
                        </tr>
                        <tr>
                            <td><label for="Fotografía">Fotografía</label></td>
                            <td><input type="url" name="Fotografía" id="Fotografía" class="form-control"
                                placeholder="https://example.com" pattern="https://.*" required/></td>
                        </tr>
                    </table>
                    <br/>
                        <button class="btn btn-dark btn-lg action-button col-2 offset-xl-1" onclick="create()">REGISTRAR</button>
                </form>
            </div>
        )
    }
}

export default CrearProductos;