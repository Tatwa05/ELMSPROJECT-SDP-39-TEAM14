const mongoose = require("mongoose")

const employeeschema = new mongoose.Schema({
    id:{
        type:String,
        required: true,
        unique:true,
    },
    fullname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
    dateofbirth: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    
    password: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    contact: {
        type: String,
        required: true,
        unique:true
      },
    casualleaves: {
        type: String,
        required: true
      },
      medicalleaves: {
        type: String,
        required: true
      },
      ondutyleaves: {
        type: String,
        required: true
      },
      maternityleaves: {
        type: String,
        required: true
      },
    
  });

  const employee = mongoose.model('employee', employeeschema);

  module.exports = employee;