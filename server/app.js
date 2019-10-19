const express = require('express');
const port = 3000;
const next = require('next');
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();
const routes = require('./routes');
const bodyParser = require('body-parser');
app.prepare().then(() => {
    const server = express();

    /* give all Next.js's requests to Next.js server */
    server.get("/_next/*", (req, res) => {
        handle(req, res);
    });

    server.get("/static/*", (req, res) => {
        handle(req, res);
    });

    /* Error handling from async / await functions */
    server.use((err, req, res, next) => {
        const { status = 500, message } = err;
        res.status(status).json(message);
    });

    //server.use(express.json());
    server.use(bodyParser.urlencoded({
        extended: true
      }));

    server.use(bodyParser.json())
    server.use('/',routes);
    server.get('*',(req,res) => {
        handle(req,res);
    })
    server.listen(port,err => {
        if(err) throw err;
        console.log(`listening on port ${port}`);
    })
})
