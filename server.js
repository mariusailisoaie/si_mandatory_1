const express = require('express');
const soap = require('soap');
const fs = require('fs');

const app = express();

// specific functiile pe care le poate folosi clientul
const myService = {
    Hello_Service : {
        Hello_Port: {
            sayHello: function(args) {
                return {
                    greeting: 'Hello!' + ' ' + args.name
                }
            }
        }
    }
}

const xml = fs.readFileSync('HelloService.wsdl', 'utf8');

app.get('/', function (req,res) {
    res.send('Welcome to the rest server!');
})

app.listen(4000, ()=> {
    const soapServer = soap.listen(app, '/wsdl', myService, xml);
});