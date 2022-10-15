const db = require("../db");

class Groups{
    async getGroups(request, response){
        response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const groups = await db.query('select * from groups')
        response.json(groups.rows);
    }
}

module.exports = new Groups();