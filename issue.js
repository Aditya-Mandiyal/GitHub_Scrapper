const request=require("request");
const cheerio=require("cheerio");
const path=require("path");
const pdfkit=require("pdfkit");
const fs=require(`fs`);
function issuefun(url,projectName,topic_folder_path) {
    request(url,cb);
    function cb(err,res,body) {
        if(err)
        console.log(err);
        else
        html_handler(body);
    }

    
function html_handler(html) {
    const $=cheerio.load(html);
    let issues_array=$(`a[data-hovercard-type="issue"]`);
    const doc = new pdfkit();
    doc.fontSize(27);
    doc.fillColor('red').text(`${projectName}`, 11, 40);
    doc.fontSize(10);
    let counter=80;
    let issueCounter=1;
    for(let i=0;i<10 && i<issues_array.length;i++)
    {   doc.fontSize(12);
        let issue_disp=$(issues_array[i]).text();        
        doc.fillColor('black').text(`(${issueCounter}). ${issue_disp}`, 23, counter);
        counter+=10;
        doc.fontSize(10);
        let issueHalfLink=$(issues_array[i]).attr("href");
        let issueFullLink="https://github.com"+issueHalfLink;
        doc.fillColor('blue').text(issueFullLink, 80, counter+5);
        counter+=50;
        issueCounter++;
    }
    doc.pipe(fs.createWriteStream(topic_folder_path+"\\"+projectName+".pdf")); 
    doc.end();
   
}
}
module.exports={
    issuefun:issuefun
}