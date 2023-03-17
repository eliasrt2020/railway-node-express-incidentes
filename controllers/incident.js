const Incident = require("../models/incident");


function holaMundo(req,res){
    console.log("hola mundo elias");
}

async function createIncident(req,res){
    const incident = new Incident();
    const params = req.body;

    incident.title = params.title;
    incident.description = params.description;
    incident.user = params.user;
    incident.severity = params.severity

    try {
        const incidentStore = await incident.save();

        if(!incidentStore){
            res.status(400).send({msg:"No se ha guardado la incidencia"});
        }else{
            res.status(200).send({incident: incidentStore});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidents(req,res){
    try {
        const incidents = await Incident.find().sort({create_at:1});

        if(!incidents){
            res.status(400).send({msg:"error al obtener las incidencias"})
        }else{
            res.status(200).send(incidents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidentsBySeverity(req,res){
    const params = req.query;
    const severity = params.severity;

    try {
        const incidents = await Incident.find({severity:severity}).sort({create_at:1});

        if(!incidents){
            res.status(400).send({msg:"error al obtener incidencias"});
        }else{
            res.status(200).send(incidents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getIncidentsByState(req,res){
    const params = req.query;
    const completed = params.completed;

    try {
        const incidents = await Incident.find({completed:completed}).sort({create_at:1});

        if(!incidents){
            res.status(400).send({msg:"error al obtener incidencias"});
        }else{
            res.status(200).send(incidents);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateIncident(req,res){
    const params = req.body;
    const idIncident = params.id;

    try {
        const incident = await Incident.findByIdAndUpdate(idIncident,params);

        if(!incident){
            res.status(400).send({msg:"no se ha podido actualizar la incidencia"});
        }else{
            res.status(200).send({msg:"actualizacion completada correctamente"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteIncident(req,res){
    const params = req.body;
    const idIncident = params.id;

    try {
        const incident = await Incident.findByIdAndDelete(idIncident);
        if(!incident){
            res.status(400).send({msg:"no se ha podido eliminar la incidencia"});
        }else{
            res.status(200).send({msg:"incidente eliminado correctamente"});
        }
        
    } catch (error) {
        res.send(500).send(error);
    }
}

module.exports= {
    holaMundo,
    createIncident,
    getIncidents,
    getIncidentsBySeverity,
    getIncidentsByState,
    updateIncident,
    deleteIncident
}