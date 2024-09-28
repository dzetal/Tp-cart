"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductTypes_1 = require("../src/Types/ProductTypes");
const StorableInterface_1 = require("./Types/StorableInterface");
const storage = new StorableInterface_1.ProductStorage();
storage.save(new ProductTypes_1.Product("robe", 100));
storage.save(new ProductTypes_1.Product("chemise", 200));
storage.save(new ProductTypes_1.Product("pantalon", 300));
storage.save(new ProductTypes_1.Product("chapeau", 400));
storage.save(new ProductTypes_1.Product("shirt", 500));
storage.delete("chapeau");
const products = storage.getAll();
console.log("Vos produits:");
products.forEach(product => {
    console.log(`Nom: ${product.name}, Prix: ${product.price}`);
});
