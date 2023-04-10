# Proyecto de Prueba técnica Backend

## Levantar el Proyecto

1. Tener previamente instalado nodejs (Preferiblemente v16.17.0)
2. Levantar la base de datos en su servidor (bryanarr_prueba.sql), si usa locamente en Xampp
3. Modificar el archivo de variables de entorno .env correspondiente al servidor y base de datos donde levanto el sql.
4. Abrir con una terminar de windows la carpeta completa.
5. Ejecutar los siguientes comandos.
   1. npm install
   2. npm run start
   3. Abrir un navegador e introducir el enlace: http://127.0.0.1:3000/

## EndPoints

### Categories

Para hacer uso de categories podemos realizarlo por tres consultas.

* La primera nos permite obtener todas las categorias de la Base de Datos: http://127.0.0.1:3000/categories
* La segunda nos permite obtener una categoria especifica de la Base de Datos: http://127.0.0.1:3000/categories/1
* La tercera nos permite obtener todos los productos que pertenescan a una categoria especifica de la Base de Datos: http://127.0.0.1:3000/categories/products/1

### Products

Para hacer uso de products podemos realizarlo por 4 consultas - CRUD (Para hacer uso de la tercera, cuarta y quinta debera realizarlo desde una plataforma de prueba de APIS, recomiendo usar Postman ).

* La primera nos permite obtener todos los productos de la Base de Datos: http://127.0.0.1:3000/products
* La segunda nos permite obtener un producto especifico de la Base de Datos: http://127.0.0.1:3000/products/1
* > Antes de continuar con la tercera y cuarta configuraremos el Postman, para la tercera y cuarta debera seleccionar POST / PUT segun corresponda y en Headers incluir lo siguiente: KEY= Accepts y VALUE = application/json
  >
* La tercera nos permite insertar un producto en la Base de Datos :
  * Enlace (POST): http://127.0.0.1:3000/products
  * Body - raw insertar lo siguiente:

    {"name":"product_new_mobile",

    "description":"Product new",

    "price":"50.0",

    "cost":"19",

    "stock":"10",

    "idCategory":1}
* La cuarta nos permite actualizar un producto especifico de la Base de Datos:
  * Enlace (PUT): http://127.0.0.1:3000/products/5
  * Body - raw insertar lo siguiente:

    {"description": "Earphones inalámbricos con cancelación activa de ruido, duración de batería de hasta 8 horas y un estuche que ofrece hasta 24 horas adicionales de carga.",

    "price": 1379,

    "cost": 1000,

    "stock": 5,

    "idCategory":2}
* La quinta nos permite eliminar un producto especifico de la Base de Datos:
  * Enlace (DELETE): http://127.0.0.1:3000/products/5
