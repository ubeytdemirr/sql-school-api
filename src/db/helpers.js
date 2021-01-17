const insert = (tableName,body) => `INSERT INTO ${tableName} (${Object.keys(body).join(",")}) VALUES (${Object.values(body).map(value=>`'${value}'`).join(",")});`


const select = (tableName,parameters='*',whereClause='') => `SELECT ${Object.keys(parameters).join(",")} FROM ${tableName} ${whereClause};`

module.exports = {insert,select}