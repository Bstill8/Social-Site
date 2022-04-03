const { pool } = require("./db");
const func = require("./dbfunctions")

let conn;
beforeAll(async () => {

    conn = await pool.getConnection();

})
test('Is connection valid',async() => {

    expect(Object.keys(await conn.query("show tables")).at(-1)).toBe("meta")
})
test('Test createUser', () => {
    expect(func.createUser(conn)).toEqual("something")

    
});

afterAll(() => {
    conn.release();
    pool.end();
})