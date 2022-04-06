const request=require("request");
const cheerio=require("cheerio");
const topic=require("./topic");          
const url="https://github.com/topics";

//     (1). request for getting html
request(url,cb);
function cb(error,response,body) {
    if(error)
        console.log(error);
    else
        htmlHandle(body);    
}

//     (2). html se Top 3 Topics ke Link nikal kr next Module ko bhejo
function htmlHandle(html) {
    const $=cheerio.load(html);
    let topics_anchorElement_Array=$(".no-underline.flex-1.d-flex.flex-column");
    for(let index=0;index<3;index++)
    {
        let ithTopic=$(topics_anchorElement_Array[index]);
        let ithtopic_halfLink=ithTopic.attr("href");   
        let ithtopic_fullLink="https://github.com"+ithtopic_halfLink;
        // console.log(ithtopic_fullLink);
        topic.topicfun(ithtopic_fullLink);
    }
}