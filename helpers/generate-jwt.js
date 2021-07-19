const jwt = require('jsonwebtoken')

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '5h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se puedo generar token');
            } else {
                resolve(token);
            }
        })
    })
}

module.exports = {
    generateJWT
}