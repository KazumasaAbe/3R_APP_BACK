const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "mydb",
  password: "password",
  port: 5432,
});
client.connect();

const query = {
  text: 'SELECT * FROM staff',
};

client.query(query)
  .then((res) => {
    console.log(res.rows[0]);
    client.end();
  })
  .catch((e) => console.error(e.stack));
