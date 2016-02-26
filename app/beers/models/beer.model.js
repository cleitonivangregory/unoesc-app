'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BeerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    brewery: {
    	type: Schema.ObjectId,
    	ref: 'Brewery'
    }
})

module.exports = mongoose.model('Beer', BeerSchema);