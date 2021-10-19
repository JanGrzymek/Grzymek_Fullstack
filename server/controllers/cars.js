const asyncHandler = require('express-async-handler');
const { getCars2, changeStatusCar2, deleteCar2, postCar2 } = require('../model/cars');
const { restart } = require('nodemon');

const getCars = asyncHandler(async (req, res) => {
  const result = await getCars2();
  res.status(200).json(result);
});

const changeStatusCar = asyncHandler(async (req, res) => {
  console.log(req.body.status);
  const result = await changeStatusCar2(req.params.id, req.body.status);
  res.status(result.code).json(result);
});

const deleteCar = asyncHandler(async (req, res) => {
  const result = await deleteCar2(req.params.id);
  res.status(200).json(result);
});

const postCar = asyncHandler(async (req, res) => {
  const result = await postCar2(req.body);
  res.status(result.code).json(result);
});

module.exports = { getCars, changeStatusCar, deleteCar, postCar };
