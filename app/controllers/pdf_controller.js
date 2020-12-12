module.exports.generate = (application, req, res)=>{
    let body = req.body;

    console.log(body);
    let randomName = Math.floor(Math.random()*10000);
    let doc = application.config.pdfGenerator;
    doc.text(body.nome, 50,10);
    doc.text(body.descricao, 10,20);// 10=x 20 =y
    doc.save(`./app/public/pdfs/${randomName}.pdf`);

    res.render('index', {validacao: 'Pdf Criado'});
}