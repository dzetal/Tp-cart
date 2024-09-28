import { Product } from "../src/Types/ProductTypes";
import { ProductStorage } from "./Types/StorableInterface";

const storage = new ProductStorage();
storage.save(new Product("robe", 100));
storage.save(new Product("chemise", 200));
storage.save(new Product("pantalon", 300));
storage.save(new Product("chapeau", 400));
storage.save(new Product("shirt", 500));
storage.delete("robe")

const products = storage.getAll();
console.log(`Vous avez ${products.length} produits au total`);
products.forEach(product => {
    console.log(`Nom: ${product.name}, Prix: ${product.price}`);
});