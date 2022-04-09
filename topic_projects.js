const request=require("request");
const cheerio=require("cheerio");
const issue=require("./issue");
//     (1). URL jo topic.js se recieve hoga uski html mngvao request se
function topic_projectsFun(url,projectName,topic_folder_path) {
    request(url,cb);
    function cb(err,res,body) {
        if(err)
           console.log(err);
        else
           html_handler(body);   
    }
//    (2). Abhi jo project ki html hogi usme se issue ka link nikal ke aage bhejo
function html_handler(html) {
    const $=cheerio.load(html);
    let issueAnchorElem=$("#issues-tab");
    let issue_halfLink=issueAnchorElem.attr("href");
    let issue_fullLink="https://github.com"+issue_halfLink;
    // console.log(issue_fullLink);
    issue.issuefun(issue_fullLink,projectName,topic_folder_path);
}

}


module.exports={
    topic_projectsFun:topic_projectsFun
}