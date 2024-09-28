"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductTypes_1 = require("../src/Types/ProductTypes");
var StorableInterface_1 = require("./Types/StorableInterface");
var storage = new StorableInterface_1.ProductStorage();
storage.save(new ProductTypes_1.Product("robe", 100));
storage.save(new ProductTypes_1.Product("chemise", 200));
storage.save(new ProductTypes_1.Product("pantalon", 300));
storage.save(new ProductTypes_1.Product("chapeau", 400));
storage.save(new ProductTypes_1.Product("shirt", 500));
storage.delete("chapeau");
var products = storage.getAll();
console.log("Vos produits:");
products.forEach(function (product) {
    console.log("Nom: ".concat(product.name, ", Prix: ").concat(product.price));
});
