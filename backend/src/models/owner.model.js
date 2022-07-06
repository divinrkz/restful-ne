const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { registerSchema } = require('swaggiffy');

/**
 * Owner schema
 */
const ownerSchema = mongoose.Schema({
    names: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        unique: true,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
ownerSchema.plugin(timestamps);

/**
 * Owner model
 */
const Owner = mongoose.model('Owner', ownerSchema);

const ownerDto = {
    names: '',
    nationalId: '',
    phoneNumber: '',
    address: ''
}
/**
 * register swagger model
 */
registerSchema('Owner', ownerDto);

/**
 * validate create owner input
 * @param {*} data 
 * @returns 
 */
const validate = (data) => {
    const schema = {
        names: Joi.string().required(),
        nationalId: Joi.string().regex(/^\d{16}$/).required(),
        phoneNumber: Joi.string().regex(/^\d{10}$/).required(),
        address: Joi.string().required()
    }

    return Joi.validate(data, schema);
}


module.exports = {
    Owner,
    validate
}