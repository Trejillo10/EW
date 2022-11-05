const express = require('express');
const app = express();

app.get("/", (req, res, next) =>{
    res.status(200);
    res.send("Bienvenido")

});

app.listen(3000,() => {
    console.log("Hola Mundo");
});


/*
verbos HTTP
GET --> Lo que ejecuta nuestros navegadores cada
que ponemos una url. Regresa una página web

POST --> Nos sirve para guardar o publicar algo.
Como cuando nos registramos en algún sitio web

PATCH --> Actualización de UN dato de un recurso 
(registro en una bd) en específico  

PUT --> Modifica TODOS los elementos 
Programar para que se haga

DELETE --> Eliminiar un recurso

*/

/*app.use(press.json());
req -> petición del cliente (navegador)
res -> objeto que nos ayuda a contestar
la petición 
*/