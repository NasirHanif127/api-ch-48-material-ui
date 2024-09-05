import express from 'express';
const router = express.Router();
import verifyToken from '../middleware/auth.js';

router.get('/', function(request, response) {

    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
        console.log(token)
    if (!token) {
      console.log(token)
        return response.status(401).json({ message: 'Access token is missing' });
    }
    const decoded = verifyToken(token);

    if(decoded) {
        request.user = decoded.data;
        response.status(200).json({ message: 'Token verified successfully', user: request.user });
    } else {
      response.status(401).json({ message: 'Invalid or expired token' });
    }

});

export default router;
