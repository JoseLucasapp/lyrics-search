module.exports = (application)=>{
    application.get('/',(req,res)=>{
        application.app.controllers.index_controller.index(application, req, res);
    });
}