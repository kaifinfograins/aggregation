const Employee = require("../models/employeeModel");

const addEmployee = async (req, res) => {
  try {
    const { name, city, state, payments, languages } = req.body;

    const result = new Employee({
      name,
      city,
      state,
      payments,
      languages,
    });

    await result.save();
    return res.status(200).json({
      status: 200,
      message: "Employee added successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getEmployee = async (req, res) => {
  try {
    const result = await Employee.find().sort({ createdAt: -1 });
    return res.status(200).json({
      status: 200,
      message: "Data fetch successfully",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// group aggregation used here and sum all the payments of all tghe documents present iin the collection
const getAllPayments = async (req, res) => {
  try {
    const getData = [
      {
        $group: {
          _id: "randomId",
          allPayments: { $sum: "$payments" },
          minPayment: { $min: "$payments" },
          maxPayment: { $max: "$payments" },
          avgPayment: { $avg: "$payments" },
          countPayment: { $sum: 1 }, //count all payment
        },
      },
    ];

    const result = await Employee.aggregate(getData);
    // const result = await Employee.find();
    return res.status(200).json({
      message: "Successfully fetched payments",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// match and limit operator
const MatchOperator = async (req, res) => {
  try {
    const matchOperator = [
      {
        $match: { languages: "js" },
      },
      {
        $limit: 10,
      },
    ];

    const result = await Employee.aggregate(matchOperator);
    return res.status(200).json({
      message: "Successfully match",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};


const skipOperator = async (req, res) => {
  try {
    const skipOperator = [
      {
        $match: { languages: "js" },
      },
      {
        $skip: 1,
      },
    ];

    const result = await Employee.aggregate(skipOperator);
    return res.status(200).json({
      message: "Successfully match",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addEmployee,
  getEmployee,
  getAllPayments,
  MatchOperator,
  skipOperator,
};
