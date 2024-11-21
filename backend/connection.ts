const { Client } = require('pg');

const client = new Client({
  host:'',
  port: '',
  user: '',
  password: '',
  database: '',
});

client.connect()
  .then(() => {
    console.log('Connected to the database!');
    return client.end();
  })
  .catch((err) => console.error('Connection error', err.stack));