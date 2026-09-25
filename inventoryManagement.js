let products = ["Laptop", "Phone", "Headphone", "Monitor"]

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName)
}

function updateProductName(position, newName) {
  products[position] = newName;
}

function removeProduct() {
  products.pop();
}

console.log(products);
console.log("--------------------------------------------------");

console.log();
addProduct("Tablet");
console.log(products);
console.log("--------------------------------------------------");

console.log()
updateProductName(1, "Smartphone"); 
console.log(products);
console.log("--------------------------------------------------");


// // Export the necessary parts for testing
// module.exports = {
//   logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
//   addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
//   updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
//   removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
//   products
// };
// c