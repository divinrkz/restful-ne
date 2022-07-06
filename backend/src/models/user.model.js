const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { EUserType } = require('./enums');
const { getEnum } = require('../utils/common.util.js');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { registerSchema } = require('swaggiffy');


const userSchema = mongoose.Schema({
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    nationalId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
userSchema.plugin(timestamps);
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        names: this.names,
        phoneNumber: this.phoneNumber,
        nationalId: this.nationalI
    }, process.env.JWT_SECRET);
};


const User = mongoose.model('User', userSchema);

const userDto = {
    names: '',
        email: '',
        nationalId: '',
        phoneNumber: '',
        password: ''
}
registerSchema('User', userDto);

const validate = (data) => {
    const schema = {
        names: Joi.string().required(),
        email: Joi.string().email().required(),
        nationalId: Joi.string().min(16).max(16).required(),
        phoneNumber: Joi.string().min(10).max(10).required(),
        password: Joi.string().min(5).required()
    }

    return Joi.validate(data, schema);

}


const authDto = {
    email: '',
    password: ''
}

registerSchema('AuthDto', authDto);

const validateLogin = (data) => {
    const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }

    return Joi.validate(data, schema);

}


module.exports = {
    User,
    validate,
    validateLogin
}