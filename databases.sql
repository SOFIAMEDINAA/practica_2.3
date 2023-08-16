SHOW DATABASES;

CREATE DATABASE cosmeticos;

USE cosmeticos;

SHOW TABLES;


CREATE TABLE productos_de_belleza(
    id_registro INT NOT NULL AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    cantidad_gr FLOAT NOT NULL,
    color VARCHAR(50) NOT NULL,
    tipo_de_piel VARCHAR (80) NOT NULL,
    precio FLOAT NOT NULL,
    PRIMARY KEY (id_registro)
);

INSERT INTO productos_de_belleza (marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("Maybelline","corrector de ojeras", 10, "tono Ligth", "todo tipo de piel", 5.715);

INSERT INTO productos_de_belleza (marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("Mary kay","base", 30, "tono light tan", "piel a grasa", 3.810);

INSERT INTO productos_de_belleza (marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("saphora","iluminador", 15, "tono pink", "todo tipo de piel", 5.999);

INSERT INTO productos_de_belleza (marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("Loreal Paris","labial", 25, "tono nude", "todo tipo de piel", 2.565);

INSERT INTO productos_de_belleza (marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("maybelline","paleta de sombras", 115, "tono nudes", "todo tipo de piel", 8.215);


INSERT INTO productos_de_belleza (marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("mary kay","crema hidratante", 250, "tono neutro", "piel a seca", 2.999);

INSERT INTO productos_de_belleza(marca,nombre,cantidad_gr,color,tipo_de_piel,precio)
VALUES ("avon","polvo matizador", 50, "tono neutro", "piel a grasa", 2455 );


SELECT * FROM productos_de_belleza;

UPDATE productos_de_belleza SET precio = 3.999 WHERE id_registro = 2;

DELETE FROM productos_de_belleza WHERE id_registro = 7;
DELETE FROM productos_de_belleza WHERE id_registro = 8;