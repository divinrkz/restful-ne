const { APIResponse } = require('../utils/APIResponse.config');

exports.AUTH_MIDDLEWARE = async (req, res, next) => {
    const header = req.header('Authorization');
    if (!header || !(header.startsWith('Bearer ')))
        return res.send(API_RESPONSE(false,  'No Token Found', null, 400)).status(401);

    const {token} = decryptToken(header.split(' ')[1]);
    if (!token) return res.send(API_RESPONSE(false,  'Invalid Bearer Token', null, 400)).status(401)

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id, status: USER_STATUS_ENUM.ACTIVE }).populate('category')
        if (!user) return res.status(404).send(API_RESPONSE(false,  'Invalid User Account', null, 400));


        req.AUTH_DATA = AUTH_DATA;
        next();
    }
    catch (err) {
        return res.send(API_RESPONSE(false,  'Invalid Bearer Token', null, 400)).status(400)
    }
}
