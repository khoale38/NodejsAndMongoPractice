import express from 'express'
import {getAllUser,createUser,getUserWithID,updateUser,deleteUser} from '../controller/userController.js'
const router = express.Router()



router.get('/', getAllUser)
router.post('/',createUser)

router.get('/:id', getUserWithID)

 router.delete('/:id',deleteUser)

 router.patch('/:id',updateUser)

export default router
