import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); 

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user) => {
        if (err) return res.sendStatus(403);
        req.user=user;
        next(); 
    });
}

export default authenticate;