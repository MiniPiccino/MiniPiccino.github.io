import { db } from './db.js'

let sql = `SELECT * FROM apple;`
let x = `SELECT Date FROM apple;`
let result = await db.query(x)
console.log(result)