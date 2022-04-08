const request=require("request");
const cheerio=require("cheerio");
const topic_projects=require("./topic_projects");
const path = require("path");
const fs = require("fs");

//     (1). URL jo main.js se recieve hoga uski html mngvao request se
let topic_folder_path;
function topicfun(url,path) 
{
       topic_folder_path =path
    request(url,cb);
    function cb(err, res, body) {
        if(err)
            console.error("error",err);
        else
            html_handler(body);
    } 
}

//      (2). Abhi topics ke first 8 projects ke links ko nikalo and aage wale module ko bhej do 
function html_handler(html) {
    let $=cheerio.load(html);
    let projects_AnchorElem_Array=$(".text-bold.wb-break-word");
    for(let i=0;i<8;i++)
    {
         let ithProject_halfLink = $(projects_AnchorElem_Array[i]).attr("href");
         let ithProject_fullLink = "https://github.com"+ithProject_halfLink;
        //  console.log(ithProject_fullLink);
        let projectName=$(projects_AnchorElem_Array[i]).text().trim();
        // if(projectName[projectName.length-3]=='.')
        // {
        //     projectName=projectName.substring(0,projectName.length-3)
        // }
         topic_projects.topic_projectsFun(ithProject_fullLink,projectName);
    }
 }


module.exports={
    topicfun:topicfun,
}