const morgan = require ('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));

app.get("/", (req, res, next) => {
    return res.status(200).json({ code: 1, message: "Bienvenido al Pokédex"});
});

app.use("/pokemon", pokemon);
app.use("/user", user);

app.use((req, res, next) => {
    return res.status(404).json({code: 404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});



/*
USE: se usa cuando queremos que alguna función se le aplque a 
todas las peticiones que entren al servidor
Sirve para añadir Middlewares (capas a nuestra aplicación; 
capas que procesarán las peticiones y que les harán alguna 
modificación o revisar algún dato.)

verbos HTTP
GET --> Lo que ejecuta nuestros navegadores cada
que ponemos una url. Regresa una página web
- OBTENER RECURSOS (imagen, bd, etc)

POST --> Nos sirve para guardar o publicar algo.
Como cuando nos registramos en algún sitio web
-ALMACENAR/CREAR RECURSOS

PATCH --> Actualización de UN dato de un recurso 
(registro en una bd) en específico  
-MODIFICAR UNA PARTE DE UN RECURSO 

PUT --> Modifica TODOS los elementos 
Programar para que se haga
-MODIFICAR UN RECURSO COMPLETO

DELETE --> Eliminiar un recurso

*/

/*app.use(press.json());
req -> petición del cliente (navegador)
res -> objeto que nos ayuda a contestar
la petición 
*/




/*for(i=0; i< pokemon.length; i++) {
        if(pokemon[i].name.toUpperCase() == name.toUpperCase()) {
            return res.status(200).send(pokemon[i]);
        }
    }*/


/*OPERADOR TERNARIO condicion ? valor si verdadero : valor si falso (es un if)
EJEMPLO: 
app.get('/pokemon/:id([0-9]{1,3})', (req,res,next) => {
    const id = req.params.id-1;
    if(id >=0 && id <= 150) {
       return res.status(200).send(pokemon[req.params.id -1]);
    }
    return res.status(404).send("Pokémon no encontrado");
});
LO DEL IF SERÍA:
app.get('/pokemon/:id([0-9]{1,3})', (req,res,next) => {
    const id = req.params.id-1;
    (id >=0 && id <= 150) ? 
    res.status(200).send(pokemon[req.params.id -1]):
    res.status(404).send("Pokémon no encontrado");
});


app.get('/pokemon/:name([A-Za-z]+)', (req, res,) => {

    const name = req.params.name;
    const pk = pokemon.filter((p) => {
        if(p.name.toUpperCase() == name.toUpperCase()){
            return p;
        }
    });

app.get('/pokemon/:name([A-Za-z]+)', (req, res,) => {
    const name = req.params.name;
    const pk = pokemon.filter((p) => {
        (p.name.toUpperCase() == name.toUpperCase ()) ? p : null;
    });

   (pk.length > 0) ? res.status(200).send(pk) : res.status(404).send("Pokémon no encontrado");
});

*/