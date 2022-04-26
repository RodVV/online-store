export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const dataCat = await response.json();
  // console.log(dataCat);
  return dataCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(url);
    const dataProd = await response.json();
    // console.log(dataProd);
    return dataProd;
  }
  if (categoryId) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await fetch(url);
    const dataCatId = await response.json();
    // console.log(dataCatId);
    return dataCatId;
  }
}
