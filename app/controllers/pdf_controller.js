module.exports.generate = (application, req, res)=>{
    let randomName = Math.floor(Math.random()*10000);
    let doc = application.config.pdfGenerator;
    doc.text("<h1>Olá</h1><br /><p>Lucas</p>", 10,10);
    doc.save(`./app/public/pdfs/${randomName}.pdf`);

    res.render('index', {validacao: 'Pdf Criado'});
}