module.exports.generate = (application, req, res)=>{
    let body = req.body;

    console.log(body);
    let randomName = Math.floor(Math.random()*10000);
    let doc = application.config.pdfGenerator;
    doc.text(body.texto, 10,10);
    doc.save(`./app/public/pdfs/${randomName}.pdf`);

    res.render('index', {validacao: 'Pdf Criado'});
}