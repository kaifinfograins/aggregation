const express = require("express");
const { addEmployee, getEmployee, getAllPayments, MatchOperator, skipOperator } = require("../controllers/employeeController");
const route = express.Router()



route.post('/add-employee',addEmployee)
route.get('/get-employee',getEmployee)
route.get('/getPayments',getAllPayments)
route.get("/match",MatchOperator)
route.get("/skip",skipOperator)




module.exports=route;