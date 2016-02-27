'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
});

UserSchema.pre('save', function (next){
    var user = this;

    if (this.isModified('password') || this.isNew){
        user.password = req.body.password;
    }
    next();
});

module.exports = mongoose.model('Users', UserSchema);