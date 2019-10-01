const mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Required"
    },
    description: {
        type: String
    }
});
mongoose.model("Todo",TodoSchema);