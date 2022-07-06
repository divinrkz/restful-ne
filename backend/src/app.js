require('dotenv').config();

require('./db/db');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const { Swaggiffy } = require('swaggiffy')
const {UserRoute} = require('./routes/users.route');
const {AuthRoute} = require('./routes/auth.route');
const {VehicleRoute} = require('./routes/vehicle.route');
const {OwnerRoute} = require('./routes/owner.route');
const {VehicleOwnerRoute} = require('./routes/vehicle-owner.route');

const PORT = process.env.PORT;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());

app.use('/api/users',  UserRoute);
app.use('/api/auth',  AuthRoute);
app.use('/api/vehicles',  VehicleRoute);
app.use('/api/owners',  OwnerRoute);
app.use('/api/vehicle-owners', VehicleOwnerRoute);

new Swaggiffy().setupExpress(app).swaggiffy();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));