module.exports = (application)=>{
    application.get('/pdf', (req,res)=>{
        application.app.controllers.pdf_controller.generate(application, req, res);
    });
}