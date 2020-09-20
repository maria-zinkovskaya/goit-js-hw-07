const input = document.querySelector(`#validation-input`);
input.addEventListener(`blur`, function() {
  const inputDataLength = input.getAttribute(`data-length`);
  const inputValueLength = input.value.length.toString();
  if (inputDataLength === inputValueLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
