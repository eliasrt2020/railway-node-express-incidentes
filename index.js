const port = 3000;
const app = require ("./app");
const mongoose = require("mongoose");
const urlMongoDb = 'mongodb+srv://admin:admin_4376@api-incidentes.ptlr0c9.mongodb.net/apidb';


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