const { Schema, model } = require("mongoose");

const postScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = model("Post", postScheme);
