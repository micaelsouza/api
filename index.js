const { saldo } = require('sodexo');
const { json, send, createError } = require('micro');

module.exports = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      throw createError(400, 'Method not allowed');
    }

    const { card, cpf } = await json(req);

    if (!card) {
      throw createError(400, 'Missing card param');
    }

    if (!cpf) {
      throw createError(400, 'Missing cpf param');
    }

    const data = await saldo(card, cpf);

    send(res, 200, data);
  } catch (error) {
    send(res, error.statusCode, {
      statusCode: error.statusCode,
      error: error.message
    });
  }
};