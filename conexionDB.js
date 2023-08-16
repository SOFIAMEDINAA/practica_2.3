import { createPool } from "mysql2/promise";


const pool = createPool({
    host: "localhost",
    port: 3306,
    user:"root",
    password: "Tecnica1.",
    database: "cosmeticos"
});


/* let resultado = await pool.query("SHOW TABLES;");
console.log (resultado); */


/* inserta productos a la tabla  */
/* let resultadoCrear = await pool.query(`INSERT INTO productos_de_belleza(marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("avon","polvo matizador", 50, "tono neutro", "piel a grasa", 2455 );`); */



await agregarProducto("Extreme","delineador para cejas", 20, "tono black", "todo tipo de piel", 1899);



async function agregarProducto(marca,nombre,cantidad_gr,color,tipo_de_piel,precio) {
    let resultadoCrear = await pool.query(`INSERT INTO productos_de_belleza(marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES (?,?,?,?,?,? );`,[marca,nombre,cantidad_gr,color,tipo_de_piel,precio]);

    console.log(resultadoCrear);
}

pool.end();