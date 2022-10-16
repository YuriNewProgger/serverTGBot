const db = require('../db');

class TimeTable{
    async getTimeTable(request, response){
        response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        const title = request.query.title;
        const record = await db.query(`select * from time_table where id_group = (select id from "groups" where title = '${title}')`);
        response.json(record.rows);
    }
}

module.exports = new TimeTable();