const soap = require('soap');

const url = 'http://localhost:4000/wsdl?wsdl';

const args = {'name' : 'Marius'};

soap.createClient(url, (err, client)=> {
    client.sayHello(args, (err, response)=> {
        console.log(response.greeting);
    });
});