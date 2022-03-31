const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    ports: 5432,
    user: 'admin',
    password: 12345,
    database: 'my_store'
  });

  await client.connect();
  return client;

}

module.exports = getConnection;
