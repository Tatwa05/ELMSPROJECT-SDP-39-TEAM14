const Employee = require("../models/employeemodel")
const Admin = require("../models/adminmodel")

const insertemployee = async (request, response) => {
    try 
    {
      const input = request.body;
      const employee = new Employee(input);
      await employee.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const viewemployees = async (request, response) => 
 {
    try 
    {
      const employees = await Employee.find();
      if(employees.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(employees);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deleteemployee = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const employee = await Employee.findOne({"email":email})
      if(employee!=null)
      {
        await Employee.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };


  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const {email,password} = request.body
       //console.log(input)
       const admin = await Admin.findOne({email:email})
       console.log(Admin)
       response.json(Admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  module.exports = {insertemployee,checkadminlogin,viewemployees,deleteemployee}