//DOM Elements
const btn = document.getElementById('btn');
const customer = document.getElementById('customer');
const password = document.getElementById('password');

//showError Function
showError = (input, msg) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerHTML = msg;
};

//showSuccess
showSuccess = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

//checkRequired Function
const checkRequired = inputArr => {
  var count = 0;
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `Field is required`);
      count = count + 1;
    } else {
      showSuccess(input);
    }
  });
  console.log(count);
  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

//Capital First Word
upFirstWord = inputId => {
  return inputId.charAt(0).toUpperCase() + inputId.slice(1);
};

//Event Handler
btn.addEventListener('click', e => {
  console.log(checkRequired([customer, password]));
  if (!checkRequired([customer, password])) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
});
