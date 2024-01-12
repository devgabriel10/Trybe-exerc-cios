// - Crie a função na camada de model responsável por deletar uma pessoa passageira.

// src/models/passengers.model.js
const connection = require('./connection');

const deletePassenger = async (passengerId) => {
  await connection.execute(
    'DELETE * FROM passengers WHERE id = ?',
    [passengerId],
  );
};

module.exports = {
  deletePassenger,
}

// - Implemente a rota DELETE /passenger/:id para deletar uma pessoa passageira.
// - Ao remover deve retornar o status HTTP 204.

//src/app.js
const express = require('express');
const deletePassenger = require('./models/passengers.model');

const app = express();

app.use(express.json());

app.delete('/passengers/:passengerId', async (req, res) => {
  const { passengerId } = req.params;
  await deletePassenger(passengerId);
  return res.status(204).end();
});