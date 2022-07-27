import { useState } from 'react';


function App() {

  function añadir(event) {
    event.preventDefault();

    const codigo = parseFloat(event.target.txt_Codigo.value);
    const producto = event.target.txt_Producto.value;
    const descripcion = event.target.txt_Descripcion.value;
    const precio = parseFloat(event.target.txt_Precio.value);
    const descuento = 10; 
    const cantidad = parseFloat(event.target.txt_Cantidad.value);
    const total = parseFloat(cantidad * precio); 
    const totalDescuento = parseInt(total - (total * (descuento / 100))); 
    if (!codigo) {
      alert("El codigo no puede quedar en blanco.")
      return false;
    };
    if (!producto) {
      alert("El producto no puede quedar blanco.")
      return false;
    };
    if (!descripcion) {
      alert("La descripcion no puede quedar blanco.")
      return false;
    };
    if (!precio) {
      alert("El precio no puede quedar blanco.")
      return false;
    };
    if (!cantidad) {
      alert("La cantidad no puede quedar blanco.")
      return false;
    };

    const contenido = {
      codigo:codigo,
      producto:producto,
      descripcion:descripcion,
      precio:precio,
      descuento:descuento,
      cantidad:cantidad,
      total:total,
      totalDescuento:totalDescuento
    };

    setProducto([...productos, contenido]);

    event.target.txt_Codigo.value = '';
    event.target.txt_Producto.value = '';
    event.target.txt_Descripcion.value = '';
    event.target.txt_Precio.value = '';
    event.target.txt_Cantidad.value = '';
  }

  const [productos, setProducto] = useState([]);

  return (
    <div className='container'>
      <div className="row my-5">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={añadir}>
            Codigo 
            <input className="form-control" type="text" name="txt_Codigo" placeholder="Código con solo números" required/><br />
          
            Producto 
            <input className="form-control" type="text" name="txt_Producto" placeholder="Nombre del producto" required/><br />
            
            Descripcion 
            <input className="form-control" type="text" name="txt_Descripcion" placeholder="" /><br />
            
            Precio
            <input className="form-control" type="number" name="txt_Precio" placeholder="" required/><br />

            Cantidad
            <input className="form-control" type="number" name="txt_Cantidad" placeholder="Número deseado" required/><br />
            <br />
            <input className="btn btn-primary" type="submit" value="Aceptar"/>
          </form>
        </div>  
    </div>
        <div className="container">
          <br/>
          <hr/>
          <br/>
          <table class="table table-bordered text-center">
            <thead class="table-warning table-bordered text-center"><tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Total con Descuento</th>
            </tr></thead>
            <tbody>
              {productos.map(art => {
                return (
                  <tr key={art.codigo}>
                    <td>
                      {art.codigo}
                    </td>
                    <td>
                      {art.producto}
                    </td>
                    <td>
                      {art.descripcion}
                    </td>
                    <td>
                      {art.precio}
                    </td>
                    <td>
                      {art.descuento}%
                    </td>
                    <td>
                      {art.cantidad}
                    </td>
                    <td>
                      {art.total}
                    </td>
                    <td>
                      {art.totalDescuento}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      
  );
}

export default App;
