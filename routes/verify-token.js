import express from 'express';
const router = express.Router();
import {verify} from "../services/token.js";
// :token

router.get('/:token', function(request, response) {
  const token = verify(request.query.token);
 
  if(token.verified)
  {
    response.status(200);
    response.json(token);
  }
  else {
    response.status(401);
    response.json(token);
  }
});

export default router;
