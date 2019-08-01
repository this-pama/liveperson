const mongoose = require("mongoose")
var Schema = mongoose.Schema;


const createSchema = new Schema({
   firstName: String,
   lastName: String
})

module.exports = mongoose.model('create', createSchema)