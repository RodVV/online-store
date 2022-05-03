export function getStorage() { return JSON.parse(localStorage.getItem('savedCart')); }

export function addStorage(storage) {
  const savedCart = getStorage() || [];
  const newSavedCart = [...savedCart, storage];
  localStorage.setItem('savedCart', JSON.stringify(newSavedCart));
}

export function getForm() { return JSON.parse(localStorage.getItem('savedForm')); }

export function addForm(storage) {
  // const savedForm = getForm();
  // console.log(getForm());
  const savedForm = getForm() !== null ? getForm() : [];
  const newSavedForm = [...savedForm, storage];
  localStorage.setItem('savedForm', JSON.stringify(newSavedForm));
}
