module.exports = (application)=>{
    application.post('/pdf', (req,res)=>{
        application.app.controllers.pdf_controller.generate(application);
    });
}