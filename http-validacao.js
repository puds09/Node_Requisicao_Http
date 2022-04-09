/* const fetch = 
(...args) => import('node-fetch')
.then(({default: fetch}) => fetch(...args)); */

const { request } = require('http');
const https = require('https');
const { url } = require('inspector');
var XMLHttpRequest = require('xhr2');

async function checaStatus(arrayURLs) {
    /* promises async await */  
    var arrayStatus = [] //linha adicionada para fazer o seguinte teste usando XMLHtpprequest
    /* teste usando XMLHttprequest mas nao funcionou pq nao consigo recuperar o status da requisição fora da requisiçao 
        tambem nao sei passar para fora, nem colocando uma variavel global;
    */
    for (i in arrayURLs) { //teste nao sucedido
        var xhr = new XMLHttpRequest();        
        xhr.open('GET', arrayURLs[i]);
        xhr.onload = function () {
            console.log('DONE: ', xhr.status);
            arrayStatus.push(xhr.status)
        };
        xhr.send(); 
        console.log("status: ", arrayStatus);
    }



/*     const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const request = await https.get(url, (res) => {
            console.log("res.statusCode", res.statusCode); //imprime o statusCode certinho!!
        })
        console.log(request);  ///imprime um monte de dados e sem o statusCode
        return request;
    }))
    return arrayStatus; */
    }


function geraArrayURLs(arrayLinks) {
    /* loop para cada {chave: valor} */
    /* objeto -> [valor]*/
    /* Object.values(objeto) */

    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());


}

async function validaURLs(arrayLinks) {
    const links =  geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    return statusLinks;
}

module.exports = validaURLs;