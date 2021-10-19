const db = require('../db');

async function getCars2() {
  const { rows } = await db.query(
    'SELECT cars.id, title, image, status, price, miles, year_of_make, description, first_name, last_name FROM cars JOIN owner o on cars.owner = o.id',
  );
  return {
    code: 200,
    data: rows,
  };
}

async function changeStatusCar2(id, newStatus) {
  await db.query('UPDATE cars SET status = $1 WHERE id = $2', [newStatus, id]);
  return {
    code: 200,
    data: 'Status was updated',
  };
}

async function deleteCar2(id) {
  await db.query('DELETE FROM cars WHERE id = $1', [id]);
  return {
    code: 200,
    data: 'Deleted',
  };
}

async function postCar2(data) {
  const ownerId = await db.query('SELECT id FROM owner WHERE first_name = $1 AND last_name = $2', [
    data.owner.firstName,
    data.owner.lastName,
  ]);
  await db.query(
    'INSERT INTO cars (title, status,  price, image, miles, year_of_make, owner, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
    [
      data.title,
      data.status,
      data.price,
      data.image,
      data.miles,
      data.yearOfMake,
      ownerId.rows[0].id,
      data.description,
    ],
  );
  return {
    code: 200,
    data: 'Inserted',
  };
}

module.exports = {
  getCars2,
  changeStatusCar2,
  deleteCar2,
  postCar2,
};
