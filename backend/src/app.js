require('dotenv').config();

require('./db/db');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const {UserRoute} = require('./routes/users.route');

const PORT = process.env.PORT;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors());

app.use('/api/users',  UserRoute);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));