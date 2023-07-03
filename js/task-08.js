const formInputs = document.querySelector('.login-form').elements;
const FormListen = document.querySelector('.login-form');
const handleSub = (elem) => {
  elem.preventDefault();
  const email = formInputs['email'].value;
  const password = formInputs['password'].value;
  const formInputValue = {
    email,
    password,
  };
  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }
  elem.currentTarget.reset();
  console.log(formInputValue);
};
FormListen.addEventListener('submit', handleSub);
