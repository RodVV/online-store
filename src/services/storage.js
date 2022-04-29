export function getStorage() { return JSON.parse(localStorage.getItem('savedCart')); }

export function addStorage(storage) {
  const savedCart = getStorage() || [];
  const newSavedCart = [...savedCart, storage];
  localStorage.setItem('savedCart', JSON.stringify(newSavedCart));
}
