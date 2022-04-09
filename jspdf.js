// const { jsPDF }=require("jspdf");
// Default export is a4 paper, portrait, using millimeters for units
// const doc = new jsPDF();

// doc.text("Hello world! Aditya mandiyal text text text text text text text text text text text text", 10, 10,);
// doc.text("Hello world! aditya mandital jadsksj dkasjdma", 10, 20);
// doc.text("Hello world! aditya mandital jadsksj dkasjdma", 10, 30);
// doc.setFontSize(1);
// doc.save("a4.pdf");
const pdfkit=require("pdfkit");
const fs=require(`fs`);
const doc=new pdfkit();
// doc.font('fonts/PalatinoBold.ttf')
doc.fontSize(8)
doc.fillColor('blue')
   .text("hello",50,50)
// doc.text('Some text with an embedded font!', 100, 100);
doc.pipe(fs.createWriteStream('a4.pdf')); 
doc.end();
