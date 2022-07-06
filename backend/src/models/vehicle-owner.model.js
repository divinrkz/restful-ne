const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { registerSchema } = require('swaggiffy');
Joi.objectId = require("joi-objectid")(Joi);

const vehicleOwnerSchema = mongoose.Schema({
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VehicleOwner',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    plateNumber: {
        type: String,
        unique: true,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});
vehicleOwnerSchema.plugin(timestamps);


const VehicleOwner = mongoose.model('VehicleOwner', vehicleOwnerSchema);

const vehicleOwnerDto = {
    vehicleId: '',
    ownerId: '',
}
registerSchema('VehicleOwner', vehicleOwnerDto);

const validate = (data) => {
    const schema = {
        vehicleId: Joi.objectId().required(),
        ownerId: Joi.objectId().required(),
    }

    return Joi.validate(data, schema);

}


module.exports = {
    VehicleOwner,
    validate
}