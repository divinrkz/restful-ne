const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { registerSchema } = require('swaggiffy');

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


const Owner = mongoose.model('Owner', ownerSchema);

const ownerDto = {
    names: '',
    nationalId: '',
    phoneNumber: '',
    address: ''
}
registerSchema('Owner', ownerDto);

const validate = (data) => {
    const schema = {
        names: Joi.string().required(),
        nationalId: Joi.string().min(16).max(16).required(),
        phoneNumber: Joi.string().min(10).max(10).required(),
        address: Joi.string().required()
    }

    return Joi.validate(data, schema);

}


module.exports = {
    Owner,
    validate
}