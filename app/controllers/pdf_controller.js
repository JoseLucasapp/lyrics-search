module.exports.generate = (application)=>{
    let randomName = Math.floor(Math.random()*10000);
    let doc = application.config.pdfGenerator;
    doc.text("Hello World!", 10,10);
    doc.save(`./app/public/pdfs/${randomName}.pdf`);
}