const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { registerSchema } = require('swaggiffy');
Joi.objectId = require("joi-objectid")(Joi);

/**
 * vehicle Owner schema
 */
const vehicleOwnerSchema = mongoose.Schema({
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
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

/**
 * Vehicle Owner
 */
const VehicleOwner = mongoose.model('VehicleOwner', vehicleOwnerSchema);

/**
 * Vehicle owner dtop
 * 
 */
const vehicleOwnerDto = {
    vehicleId: '',
    ownerId: '',
}
/**
 * register swagger model
 */
registerSchema('VehicleOwner', vehicleOwnerDto);

/**
 * validate model
 * @param {} data 
 * @returns 
 */
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