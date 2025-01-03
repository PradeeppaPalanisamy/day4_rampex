import express from 'express'
//importing fetch method from controller.js

import { fetch } from '../controller/controller.js';
import { create , update, del, details} from '../controller/controller.js';

const router=express.Router();

router.get('/fetch',fetch) // imported fetch
router.post('/create',create)
router.put('/update/:id',update)  // for passing id value , to upadte a value a unique value sholud be present that is id - in insomania
router.delete('/delete/:id',del)  
router.get('/details/:id',details)   // to display details based on given id

export default router;   // exported to server.js file
