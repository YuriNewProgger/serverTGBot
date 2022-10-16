const port = 3000;
const express = require('express');
const newsRouter = require('./Routers/news.roites');
const groupsRouter = require('./Routers/groups.router');
const timeTableRouter = require('./Routers/timeTable.router');

const app = express();

app.use('/news', newsRouter);
app.use('/groups', groupsRouter);
app.use('/tb', timeTableRouter);
app.use('/', (request, response) => {
    response.send(`Server started on port ${port}`);
});

app.listen(port, function(){
    console.log(`Server started on port ${port}`);
})
