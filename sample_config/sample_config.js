 var pg = require('pg');

// Database connection details;
var config = {
  user: 'postgres', //env var: PGUSER 
  database: 'Pet-Store', //env var: PGDATABASE 
  password: 'root', //env var: PGPASSWORD 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};
 
var pool = new pg.Pool(config); 

module.exports=pool //exports the db instance 