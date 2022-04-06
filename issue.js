const request=require("request");
const cheerio=require("cheerio");

function issuefun(url) {
    request(url,cb);
    function cb(err,res,body) {
        if(err)
        console.log(err);
        else
        html_handler(body);
    }
}


function html_handler(html) {
    const $=cheerio.load(html);
    let issues_array=$(`a[data-hovercard-type="issue"]`);
    for(let i=0;i<6;i++)
    {
        console.log($(issues_array[i]).text());
    }
    console.log("\n");
}

module.exports={
    issuefun:issuefun
}