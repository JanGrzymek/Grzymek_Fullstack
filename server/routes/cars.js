const express = require('express');
const { getCars, changeStatusCar, deleteCar, postCar, getOwner, getOwners } = require('../controllers/cars');

const router = express.Router();

router.get('/cars', getCars);

router.patch('/cars/:id', changeStatusCar);

router.delete('/cars/:id', deleteCar);

router.post('/cars', postCar);

router.get('/owners/:id', getOwner);

router.get('/owners', getOwners);

module.exports = router;
