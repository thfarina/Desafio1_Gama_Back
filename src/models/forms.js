const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: { type: String, required: true },
  cargo: { type: String, required: true },
  date: { type: String, required: true },
  estadocivil: { type: String, required: true },
  genero: { type: String, required: true },
  CEP: { type: String, required: true },
  endereco: { type: String, required: true },
  numero: { type: String, required: false},
  complemento: { type: String, required: true },
  bairro: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  celular: { type: String, required: true },
  telefone1: { type: String, required: true },
  email: { type: String, required: true },
  identidade: { type: String, required: true },
  CPF: { type: String, required: true },
  veiculo: { type: String, required: true },
  habilitacao: { type: String, required: true },
});

const model = mongoose.model('Forms', schema);

module.exports = model