import { Client } from 'https://deno.land/x/mysql/mod.ts'

const home = Deno.env.get('HOME');
console.log(`HOME: ${home}`);

const connectionData = {
  '/Users/rene':  {
    hostname: '127.0.0.1',
    username: 'root',
    password: 'p455w0rd',
    db: 'website',
  },
  '/app': {
		hostname: 'HOSTNAME',
    username: 'USERNAME',
    password: 'PASSWORD',
    db: 'DATABASE'
  }
};

const conn = connectionData[home];
console.log(conn);
const db = await new Client().connect(conn);
export { db };