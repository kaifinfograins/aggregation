const Admin = require("../models/adminModel");
var {encode} = require("../config/token")

const addAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const data = new Admin({
      name,
      email,
      password,
    });
 
    await data.save();

    const token = await encode({
      id : data._id 
    })

   

    return res.status(200).json({
      status: 200,
      message: "Admin added successfully",
      data: data,
      token
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getAdmin = async (req, res) => {
  try {
    const query = [
      {
        $lookup: {
          from: "employees",
          localField: "employeeId",
          foreignField: "id",
          as: "employee",
        },
      },
      // {
      //   $unwind: "$employee",
      // },
      // {
      //   $project: {

      //     employee: "$employee_id",
      //     city: "$employee.city",
      //     state: "$employee.state",
      //     name: "$name"
      //   },
      // },
    ];

    const data = await Admin.aggregate(query);
    return res.status(200).json({
      status: 200,
      message: "Data fetch successfully",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addAdmin,
  getAdmin,
};
