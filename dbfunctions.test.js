const { pool } = require("./db");
const func = require("./dbfunctions")

let conn;
beforeAll(async () => {

    conn = await pool.getConnection();

})
test('Is connection valid',async() => {

    expect(Object.keys(await conn.query("show tables")).at(-1)).toBe("meta")
})
test('Test createUser', async() => {
    let response = await func.createUser(conn, "testName", "testUser", "testPwd")
    console.log(response)
    expect(response.affectedRows).toEqual(1)
    expect(response.warningStatus).toEqual(0)

    
});

afterAll(() => {
    conn.release();
    pool.end();
})