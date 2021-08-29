const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {type: String, required: true },
  cargo: {type: String, required: true },
  birth: {type: String, required: true },
  estadocivil: {type: String},
  genero: {type: String},
  CEP: {type: String, required: true },
  endereco: {type: String, required: true },
  numero: {type: String, required: true},
  complemento: {type: String},
  bairro: {type: String, required: true },
  cidade: {type: String, required: true },
  estado: {type: String, required: true },
  celular: {type: String, required: true },
  telefone1: {type: String},
  email: {type: String, unique: true, required: true },
  identidade: {type: String},
  CPF: {type: String, unique: true, required: true },
  veiculo: {type: String},
  habilitacao: {type: String},
});

const model = mongoose.model('Forms', schema);

module.exports = model