const port = process.env.PORT || 3977;
const app = require ("./app");
const mongoose = require("mongoose");
require('dotenv').config({path: './.env'});
const userDb = process.env.USER_DB;
const passDb = process.env.PASS_DB;
const dbName = process.env.DB_NAME;

const urlMongoDb = `mongodb+srv://${userDb}:${passDb}@api-incidentes.ptlr0c9.mongodb.net/${dbName}`;



const conexionDb = async()=>{
try {
    await mongoose.connect(urlMongoDb);
        console.log("La conexion a la base de datos es correcta");
        app.listen(port, () =>{
            console.log("Server running at http://localhost:" + port);
        })
    
} catch (error) {
    console.log(error);
}
}

conexionDb();
/*
mongoose.connect(urlMongoDb, (err, res)=>{
    try {
        if(err){
            throw err;
        }
        else{
            console.log("La conexion a la base de datos es correcta");
            app.listen(port, () =>{
                console.log("Server running at http://localhost:" + port);
            })
        }
    } catch (error) {
        console.log(error);
    }
})*/