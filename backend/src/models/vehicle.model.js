const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { registerSchema } = require('swaggiffy');


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
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
vehicleSchema.plugin(timestamps);


const Vehicle = mongoose.model('Vehicle', vehicleSchema);

const vehicleDto = {
    modelName: '',
    company: '',
    year: 0,
    price: 0
}
registerSchema('Vehicle', vehicleDto);

const validate = (data) => {
    const schema = {
        modelName: Joi.string().required(),
        company: Joi.string().required(),
        price: Joi.number().min(0).required(),
        year: Joi.string().min(1800).max(2022).required()
    }

    return Joi.validate(data, schema);

}


module.exports = {
    Vehicle,
    validate
}