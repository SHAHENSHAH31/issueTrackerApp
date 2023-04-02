const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    issue:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }
]
        
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;