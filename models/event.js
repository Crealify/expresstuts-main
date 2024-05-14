const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    type:{
        type: String,
    },
    description:{
        type:String,
    },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;


