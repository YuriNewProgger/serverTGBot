const db = require("../db");

class News{
    async getLastNews(request, response){
        response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const news = await db.query('select * from news order by news.id desc limit 3')
        response.json(news.rows);
    }
}

module.exports = new News();