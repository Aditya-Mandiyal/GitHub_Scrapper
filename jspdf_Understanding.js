const { jsPDF }=require("jspdf");
// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.text("hii world", 20, 20);
doc.text("namaste world", 30, 30);
doc.save("a4.pdf");