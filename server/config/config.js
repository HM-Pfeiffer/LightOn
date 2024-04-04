
//need to import .env file here 
require('dotenv').config();  //note: can also write a variable, e.g. ~~ const config = require('dotenv')


//config autocreated with sequlize init 
        //change from JSON to JS file 

module.exports = {
  development: {
  username: process.env.DB_USERNAME, //root value change to env
  password: process.env.DB_PASSWORD, //changed from null
  database: process.env.DB_NAME, //changed from "database_development"
  host: process.env.DB_HOST, //host changed from 127.0.0.1  && NOTE: if wanting to specify the exact host terminal http://localhost3000, can do that here
  logging: true, //this added property allows you to see the logs in your terminal as commands come through
  dialect: "postgres", //changed from mysql 
  },
  test: {
  username: process.env.DB_USERNAME, //root value change to env
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres"
  },
  production: {
  username: process.env.DB_USERNAME, //root value change to env
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres"
  }
}
