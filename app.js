const express = require('express');
const app = express();
const dbConnection = require('./service/dbConnection');
const port = 3900;
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.route');

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

dbConnection.connection();

app.use('/', taskRouter);

app.listen(port, () => 
    console.log(`App listening on port ${port}! Sanaol!`)
);
