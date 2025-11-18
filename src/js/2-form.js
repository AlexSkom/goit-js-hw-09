const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const formData = { email: '', message: '' };
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});
const savedData = localStorage.getItem(storageKey);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);

  form.reset();
  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
});
