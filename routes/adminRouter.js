const express = require("express");
const { addAdmin, getAdmin } = require("../controllers/adminController");
const route = express.Router()
const verifyToken = require("../config/verifyToken")

route.post('/add-admin',addAdmin)
route.get('/get-admin', getAdmin)




module.exports = route;
