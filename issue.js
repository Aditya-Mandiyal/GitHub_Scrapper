const request=require("request");
const cheerio=require("cheerio");
const project=require("./topic");
const { jsPDF }=require("jspdf");
function issuefun(url,projectName) {
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
    // console.log(projectName+"-------------->>>>");
    const doc = new jsPDF();
    for(let i=0;i<5;i++)
    {   
        let issue_disp=$(issues_array[i]).text();        
        doc.text(issue_disp, 10, 10);
        break;
    }
    doc.save(projectName+".pdf");

}
}


module.exports={
    issuefun:issuefun
}