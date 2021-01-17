const insert = (tableName,body) => `INSERT INTO ${tableName} (${Object.keys(body).join(",")}) VALUES (${Object.values(body).map(value=>`'${value}'`).join(",")});`


const select = (tableName,parameters='*',whereClause='') => `SELECT ${Object.keys(parameters).join(",")} FROM ${tableName} ${whereClause};`


const update = (tableName,body,whereClause='') => `UPDATE ${tableName} SET ${Object.entries(body).map(([key,value])=>`${key}='${value}'`).join(` , `)}  WHERE ${Object.entries(whereClause).map(([key,value])=>`${key}=${typeof value==='string'?`'${value}'`:value}`).join(` AND `)};`

const remove = (tableName,whereClause='') => `DELETE FROM ${tableName} WHERE ${Object.entries(whereClause).map(([key,value])=>`${key}=${typeof value==='string'?`'${value}'`:value}`).join(` AND `)};`

 
module.exports = {insert,select,update,delete:remove}