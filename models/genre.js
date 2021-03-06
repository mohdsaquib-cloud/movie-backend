const mongoose = require('mongoose');
const Joi  = require('joi');
const genraSchema = new mongoose.Schema({
    name:{
        type : String,
        required:true,
        minlength:5,
        maxlength:50
    }
});
const Genre = mongoose.model('Genre',genraSchema);

function validateGenre(genre){
    const schema = Joi.object({
        name : Joi.string().min(3).required()     
    });        
    return schema.validate(genre);    
}
exports.genraSchema = genraSchema;
exports.Genre = Genre;
exports.validate = validateGenre;