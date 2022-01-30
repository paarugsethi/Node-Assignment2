const path = require('path');
const fs = require('fs');

// __dirname, __filename
// console.log(__dirname);
// console.log(__filename);

// const index = 'E:/Paarug PC/MasaiMaterial/unit5/assignment2/index.js';
// // Dirname
// console.log("Dirname:", path.dirname(index));

// // Basename
// console.log("Basename:", path.basename(index));

// // Extname
// console.log("Extname:", path.extname(index));

// // JOIN
// const eg = "path.txt";
// console.log("Path:", path.join('/', 'users', 'unit5', eg));

// // FORMAT
// const format = 'format.txt';
// path.format({ dir: '/users/unit5', base: format });

// // PARSE
// const parse = 'parse.txt';
// console.log('Path', path.parse('E:/Paarug PC/MasaiMaterial/unit5/assignment2/index.js'));

const http = require('http');
const https = require('https');
const { fstat } = require('fs');

const server = http.createServer(function(req, res) {
    if (req.url === '/' && req.method === "GET"){
        handleIndex(req, res);
    }
    if (req.url === '/user/1' && req.method === "GET"){
        handleUsersPage(req, res, 1);
    }
    if (req.url === '/user/2' && req.method === "GET"){
        handleUsersPage(req, res, 2);
    }
    if (req.url === '/user/3' && req.method === "GET"){
        handleUsersPage(req, res, 3);
    }
})

const handleUsersPage = (req, res, id) => {
    fs.readFile(path.join(__dirname, 'template', 'user.html'), 'utf8', (err, data) => {
        
        if (err) {
            res.writeHead(400);
            res.send("Something went wrong!");
            return;
        }

        let template = data;
        https.get("https://reqres.in/api/users/" + id, (httpsResponse) => {
            
            let data = '';
            
            httpsResponse.on('data', (chunk) => {
                data += chunk;
            })

            httpsResponse.on('end', () => {
                const response = JSON.parse(data);
                
                const options = {
                    name: response.data.first_name + " " + response.data.last_name,
                    img_src: response.data.avatar,
                    email: response.data.email
                }

                for (let key in options){
                    const value = options[key];
                    template = template.replace(`{${key}}`, value);
                }
        
                res.writeHead(200);
                res.end(template);
            })
        })
    })
}

const handleIndex = (req, res) => {

    fs.readFile(path.join(__dirname, 'template', 'index.html'), 'utf8', (err, data) => {

        let template = data;

        const options = {
            title: "Home Page",
            index: "This is index.html",
            description: "This is part of the 3rd assignment on Node.js"
        }

        for (let key in options){
            const value = options[key];
            template = template.replace(`{${key}}`, value);
        }

        res.writeHead(200);
        res.end(template);

    })

}

server.listen("4000", (err) => {
    console.log("Listening to 4000");
})