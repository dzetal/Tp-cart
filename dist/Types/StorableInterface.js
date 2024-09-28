"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStorage = void 0;
class ProductStorage {
    constructor() {
        this.storage = new Map();
    }
    save(product) {
        this.storage.set(product.name, product);
    }
    get(id) {
        return this.storage.get(id) || null;
    }
    delete(id) {
        this.storage.delete(id);
    }
    getAll() {
        return Array.from(this.storage.values());
    }
}
exports.ProductStorage = ProductStorage;
