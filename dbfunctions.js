const db = require('./db')

function createUser(conn, name, userName, password){
    return conn.query(`INSERT INTO Users (Name, UserName, Password) VALUES(\"${name}\", \"${userName}\", \"${password}\")`);
}
function deleteUser(conn, userName){
    return conn.query(`DELETE FROM Users WHERE UserName = "${userName}"`)
}


module.exports = {
    createUser,
    deleteUser
}