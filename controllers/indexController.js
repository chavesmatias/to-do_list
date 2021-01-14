const fs = require ('fs');


let indexController = {
    'task': function (req, res, next){
        res.render('index')},

    crear :  function (req, res) {
        var nuevaTarea = {
            tarea : req.body.title
        }
        fs.appendFileSync('data/tasks.json', JSON.stringify(nuevaTarea));
        res.send (nuevaTarea)
    },
    edit :  function (req, res) {
        
    },
    listadoTareas :  function (req, res) {
        res.render ('index')
    },

}

module.exports = indexController;