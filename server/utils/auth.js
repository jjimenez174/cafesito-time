const jwt = require('jsonwebtoken');

const secret = 'SuperSecret';
const expiration = '2h';

//allows token to be sent via req.body, req.query, or headers
module.exports = {
    authMiddleware: function({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization){
            token = token.split('').pop().trim();
        }
        if (!token){
            return req;
        }
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('invalid token');
        }
        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration});
    },
};
