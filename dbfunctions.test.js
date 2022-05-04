const { pool } = require("./db");
const func = require("./dbfunctions")

let conn;
beforeAll(async () => {

    conn = await pool.getConnection();

})
test('Is connection valid',async() => {

    expect(Object.keys(await conn.query("show tables")).at(-1)).toBe("meta")
})
test('Test createUser/deleteUser', async() => {
    let response = await func.createUser(conn, "testName", "testUser", "testPwd")

    expect(response.affectedRows).toEqual(1)
    expect(response.warningStatus).toEqual(0)
    let read = await conn.query("SELECT * FROM Users WHERE UserName = 'testUser'")
    expect(read[0].UserName).toEqual('testUser')

    let delResponse = await func.deleteUser(conn, "testUser")

    expect(delResponse.affectedRows).toEqual(1)
    expect(delResponse.warningStatus).toEqual(0)
    
});
test('Test Friends', async() => {
    expect(func.friendRequest(conn, ))
});
afterAll(() => {
    conn.release();
    pool.end();
})