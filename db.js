const Pool = require('pg').Pool;
require("dotenv").config();

const devConfig = {
	
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
}

//production configuration
const proConfig = {
	connectionString: process.env.DATABASE_URL //heroku addon
}
/*
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "blogrepo"
    
})*/

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);

module.exports = pool;