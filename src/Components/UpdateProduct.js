import React from "react";

class UpdateProducts extends React.Component {
    render() {
        return (
            <div className="updateFields">
                <form>

                    <table>
                        <caption className="col-3 offset-xl-5">¿Actualizar datos?</caption>
                        <tr>
                            <td><input type="text" name="ReferenceText" id="ReferenceText" className="form-control" placeholder="Referencia" required/></td>
                            <td><input type="text" name="CategoryText" id="CategoryText" className="form-control" placeholder="Categoria" required/></td>
                            <td><input type="text" name="SizeText" id="SizeText" className="form-control" placeholder="Talla" required/></td>
                            <td><input type="text" name="DescriptionText" id="DescriptionText" className="form-control" placeholder="Descripción" required/> </td>
                        </tr>
                        <tr>
                            <td><input type="text" name="AvailabilityText" id="AvailabilityText" className="form-control"
                                list="DisponibilidadList" placeholder="Disponibilidad" required/></td> 
                            <td><input type="number" name="PriceText" id="PriceText" className="form-control" placeholder="Precio" required/></td>
                            <td><input type="number" name="StockText" id="StockText" className="form-control" placeholder="Cantidad" required/></td>
                            <td><input type="url" name="Fotografía" id="Fotografía" className="form-control"
                                placeholder="https://example.com" pattern="https://.*" required/></td>
                        </tr>
                    </table>
                    <datalist id="DisponibilidadList">
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </datalist>
                    <br/>
                </form>
            </div>
        )
    }
}

export default UpdateProducts;