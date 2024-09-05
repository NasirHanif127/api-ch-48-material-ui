import express  from 'express';
const router = express.Router();
import {
  create,
  fetch,
  deleteNote
} from "../controller/notes.js";

router.post('/',create);

router.get('/:id',fetch);

router.delete('/:id',deleteNote);

export default router;
