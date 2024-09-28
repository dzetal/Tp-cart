import { Product } from "./ProductTypes";

export interface Storable<T> {
    save(item: T): void;
    get(id: string): T | null;
    delete(id: string): void;
    getAll(): T[];
}

export class ProductStorage implements Storable<Product>{

    private storage: Map<string, Product> = new Map();

    save(product: Product): void {
        this.storage.set(product.name, product);
    }

    get(id: string): Product | null {
       return this.storage.get(id) || null;
    }

    delete(id: string): void{
        this.storage.delete(id)
    }

    getAll(): Product[] {
        return Array.from(this.storage.values());
    }
}