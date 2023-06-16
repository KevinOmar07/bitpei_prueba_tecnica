# bitpei_prueba_tecnica

Para poder ejecutar el proyecto es necesario tener instalado NodeJs junto a npm.

Ejecutar el script sql para la creación de la bd. En dado caso de que el sql no funcione, solo basta con crear manualmente la base de datos con el nombre "prueba_tecnica_bitpei",
el codigo autimaticamente creara la tabla con sus respectivos campos.

En el archivo .env colocar las credenciales de la base de datos que utilizaran.

Para poder correr el proyecto, hay que ejecutar los siguientes comandos:
npm install (este comando es solo para la primera vez que se ejecute, ya que es necearios instalar las dependencias el el proyecto utiliza)
y
npm run dev

El proyector se ejecutara en el puerto 3000.

Los endpoints son los siguientes: 

/usuario/create
    data:{
        "nombre":"Pedro",
        "apellidos": "Lopez",
        "usuario": "EliTester",
        "contrasena": "kevin12."
    }

/usuario/get

/usuario/getOne
    data:{
        "id" : 1
    }

/usuario/update
    data: {
        "id": 1,
        "nombre":"Kevin",
        "apellidos": "Nuricumbo",
        "usuario": "EliTester",
        "contrasena": "kevin12."
    }

/usuario/delete
    data:{
        "id": "5"
    }

De igual manera, para entender mejor las rutas, se hizo uso de Swagger, la ruta para poder acceder es la siguente:

/docs/