const {VehicleOwner, validate} = require('../models/vehicle-owner.model');
const { APIResponse } = require('../config/APIResponse.config');
const { Vehicle } = require('../models/vehicle.model');
const { Owner } = require('../models/owner.model');
const {generatePlateNumber} = require('../utils/common.util');

const getAll = async (req, res) => {
    try {
        const vehicleOwners = await VehicleOwner.find();
        return res.status(200).send(APIResponse.success(vehicleOwners));
    } catch (err) {
        return res.status(500).send(APIResponse.fail(err.toString()));
    } 
};

const getById = async (req, res) => {
    try {
        const vehicleOwner = await VehicleOwner.findById(req.params.id);
        if (!vehicleOwner) return res.status(404).send(APIResponse.fail(null, 'NOT FOUND')); 

        return res.status(200).send(APIResponse.success(vehicleOwner));
    } catch (err) {
        return res.status(500).send(APIResponse.fail(err.toString()));
    } 
};


const create = async (req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) return res.status(400).send(APIResponse.fail(error.details[0].message, 'VALIDATION ERROR')); 

        const vehicle = Vehicle.findById(req.body.vehicleId);
        if (!vehicle) return res.status(404).send(APIResponse.fail(null, 'Vehicle not found'));

        const owner = Owner.findById(req.body.ownerId);
        if (!owner) return res.status(404).send(APIResponse.fail(null, 'Owner not found'));

        let found;
        let plateNumber;
        while(!found) {
            plateNumber = generatePlateNumber();
            found = await VehicleOwner.findOne({plateNumber});
            if (!found) break; 
        }

        console.log(plateNumber);
        const vehicleOwner = new VehicleOwner({
            vehicle: vehicle._id, owner: owner._id, plateNumber
        });

        const saved = await vehicleOwner.save();

        return res.status(200).send(APIResponse.success(saved));
    } catch (err) {
        console.error(err);
        return res.status(500).send(APIResponse.fail(err.toString()));
    } 
};



const deleter = async (req, res) => {
    try {
        const vehicleOwner = await VehicleOwner.findById(req.params.id);
        if (!vehicleOwner) return res.status(404).send(APIResponse.fail(null, 'NOT FOUND'));  

        const deleted = await VehicleOwner.findByIdAndUpdate(vehicleOwner._id, {isDeleted: true}, {new: true});

        return res.status(200).send(SUCCESS_RESPONSE(null, 'Deleted Successfully'));
    } catch (err) {
        return res.status(500).send(APIResponse.fail(err.toString()));
    } 
};




module.exports = {
    getAll, getById, create, deleter
}