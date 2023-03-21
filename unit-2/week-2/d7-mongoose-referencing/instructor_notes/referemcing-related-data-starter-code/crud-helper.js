// crud-helper.js
/*---
Used to perform CRUD external to the application

To use (don't type the $'s):
  1. Open a Node REPL in Terminal:
        $ node

  2. Load this crud-helper.js module
        $ .load crud-helper.js

  3. When done CRUDing, exit the REPL with:
        $ .exit (or ctrl-D, or ctrl-C twice)

Note that if any changes are made to the models or
this module, exit 
---*/


// If the db connection string is in a .env file,
// we need to process it just like in server.js
require('dotenv').config();
require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');
let movie, movies;
let performer, performers;
Movie.updateMany(
  {},  
  {cast: []}  
).then();
Movie.find({}).then(console.log);

