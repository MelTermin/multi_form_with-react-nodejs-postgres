const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "16429798",
  host: "localhost",
  port: 5432,
  database: "Internship"
});

module.exports = pool;