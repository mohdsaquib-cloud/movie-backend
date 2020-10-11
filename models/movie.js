const mongoose = require('mongoose');
const Joi  = require('joi');
const {genraSchema} = require('./genre');

const Movie = mongoose.model('Movie',new mongoose.Schema({
    title:{
        type : String,
        required:true,
        trim:true,
        minlength:2,
        maxlength:255
    },
    genre:{
        type:genraSchema,
        required:true
    },
    numberInStock:{
        type : Number,
        required:true,
        minlength:0,
        maxlength:255
    },
    dailyRentalRate:{
        type : Number,
        required:true,
        minlength:0,
        maxlength:255
    },

}));

function validateMovie(movie){
    const schema = Joi.object({
        title : Joi.string().min(2).max(50).required(),     
        genreId : Joi.objectId().required(),     
        numberInStock : Joi.number().min(0).required(),     
        dailyRentalRate : Joi.number().min(0).required(),            
    });        
    return schema.validate(movie);    
}
exports.Movie = Movie;
exports.validate = validateMovie;