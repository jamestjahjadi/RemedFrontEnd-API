const express=require('express')
const {TableControllers}=require('./../controllers')
const router=express.Router()

router.get('/get-table',TableControllers.getTable)
router.post('/post-data',TableControllers.addData)
router.delete('/delete-data',TableControllers.deleteData)
router.delete('/delete-all', TableControllers.deleteAlldata)
router.get('/search-table',TableControllers.searchTable)
router.put('/edit-table/:idtable',TableControllers.editData)
module.exports=router