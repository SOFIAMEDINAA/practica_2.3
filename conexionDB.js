import { createPool } from "mysql2/promise";


const pool = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tecnica1.",
    database: "cosmeticos"
});



/* automatizacion para insertar productos a la tabla */
await agregarProducto("Extreme", "delineador para cejas", 20, "tono black", "todo tipo de piel", 1899);

async function agregarProducto(marca, nombre, cantidad_gr, color, tipo_de_piel, precio) {
    let resultadoCrear = await pool.query(`INSERT INTO productos_de_belleza(marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES (?,?,?,?,?,? );`, [marca, nombre, cantidad_gr, color, tipo_de_piel, precio]);
    console.log(resultadoCrear);
}


/* mostrar tabla en consola */
async function mostrarProductos() {
    let resultadoObtenerInfo = await pool.query("SELECT * FROM productos_de_belleza");
    console.table(resultadoObtenerInfo[0]);
}


/* actualiza los productos */
await actualizarProducto(2, 3.999);

async function actualizarProducto(id_registro, precio) {
    let resultadoActualizar = await pool.query(`
    UPDATE productos_de_belleza SET precio = ? where id_registro = ?`, [3.999, id_registro]);
    console.log(resultadoActualizar);
}


await eliminarProducto(8);
/* eliminar productos */
async function eliminarProducto(id_registro) {
    let eliminarProducto = await pool.query(`DELETE FROM productos_de_belleza WHERE id_registro = ?;`, [id_registro]);
    console.log(eliminarProducto);
}


pool.end();



/* let resultado = await pool.query("SHOW TABLES;");
console.log (resultado); */


/* inserta productos a la tabla  */
/* let resultadoCrear = await pool.query(`INSERT INTO productos_de_belleza(marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("avon","polvo matizador", 50, "tono neutro", "piel a grasa", 2455 );`); */