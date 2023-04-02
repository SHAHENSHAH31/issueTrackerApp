const mongoose = require('mongoose');

mongoose.set('strictQuery',true);

mongoose.connect('mongodb://127.0.0.1:27017/issueTracker').then(
    () => {console.log("Database connected successfully")},
    (err) => {console.log("error occuring while database connection");}
);