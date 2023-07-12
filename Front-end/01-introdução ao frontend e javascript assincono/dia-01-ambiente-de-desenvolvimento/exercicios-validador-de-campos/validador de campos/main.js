import validator from 'validator';

const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');
const UUID_VERSION = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();
  // o preventDefaultevita que ao clicar no botão a pagina seja recarregada.
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, UUID_VERSION),
    url: validator.isURL(campoDeTexto.value),
    // Aqui estamos usando o framework de validação para validar so campos
  };

  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});