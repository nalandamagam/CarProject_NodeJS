const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    PId : Number ,
    PName : String,
    PType : String,

},
{
timestamps : false
}

);
module.exports = mongoose.model('Product',ProductSchema);