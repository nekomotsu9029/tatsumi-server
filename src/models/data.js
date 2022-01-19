const mongoose = require('mongoose');
const {Schema} = mongoose;

const data = new Schema({
    numberCard:String,
    employee:{
        id:String,
        name:String,
        position:String
    },
    history:[]
});

module.exports = mongoose.model('data', data);