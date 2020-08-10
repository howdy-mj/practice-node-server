// zipcode server
// cities 패키지로 zipcode 서버 띄우기

const cities = require('cities');
const url = require('url');
const http = require('http')
const app = http.createServer( function(request, response) {
    var city, query;
    query = url.parse(request.url, true).query;

    if (query.zipCode) {
        city = cities.zip_lookup(query.zipCode).city;
    } else { 
        city = 'not found' 
    }

    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.write(`The city you are in is ${city}.`);
    response.end();
})

app.listen(3000);
