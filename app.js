import express from 'express';
import router from './routes.js';
import fs from 'fs'
import https from 'https'
const app = express();

app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);





app.listen(app.get('port'), function () {
    console.log('app listening at: ' + "http://localhost:" + app.get('port') + "/");
});