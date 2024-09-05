import jwt from 'jsonwebtoken';

// Replace with your own secret key
const SECRET_KEY = process.env.JWT_SECRET || '58480454';

const verifyToken = (token) => {

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded 
    } catch (err) {
        return null    
    }
};

export default verifyToken;
