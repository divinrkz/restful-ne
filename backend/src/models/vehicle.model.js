const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { registerSchema } = require('swaggiffy');

/**
 * Vehicle schema
 */
const vehicleSchema = mongoose.Schema({
    modelName: {
        type: String,
        required: true
    },
    chasisNumber: {
        type: String,
        unique: true,
        required: true
    },
    company: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
vehicleSchema.plugin(timestamps);

// Vehicle model
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

/**
 * Vehicle dto
 */
const vehicleDto = {
    modelName: '',
    company: '',
    chasisNumber: '',
    year: 0,
    price: ''
}
registerSchema('Vehicle', vehicleDto);

/**
 * validate model
 * @param {*} data 
 * @returns 
 */
const validate = (data) => {
    const schema = {
        modelName: Joi.string().required(),
        chasisNumber: Joi.string().required(),
        company: Joi.string().required(),
        price: Joi.string().min(0).required(),
        year: Joi.number().min(1800).max(2022).required()
    }

    return Joi.validate(data, schema);

}


module.exports = {
    Vehicle,
    validate
}