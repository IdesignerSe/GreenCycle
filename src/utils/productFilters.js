export function getFreeItems(products) {
  return products.filter(p => p.free === true);
}

export function getPaidItems(products) {
  return products.filter(p => p.free === false);
}
