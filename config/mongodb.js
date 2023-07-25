const mongoose = require('mongoose');

mongoose.set('strictQuery',true);

mongoose.connect('mongodb+srv://tyagichanchal407:Shahenshah@cluster0.vmyxmud.mongodb.net/issue_tracker?retryWrites=true&w=majority').then(
    () => {console.log("Database connected successfully")},
    (err) => {console.log("error occuring while database connection");}
);