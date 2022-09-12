const port = 3000;
const express = require('express');
const newsRouter = require('./Routers/news.roites');

const app = express();

app.use('/news', newsRouter);
app.use('/', (request, response) => {
    response.send(`Server started on port ${port}`);
});

app.listen(port, function(){
    console.log(`Server started on port ${port}`);
})
