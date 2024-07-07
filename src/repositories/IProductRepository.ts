import { Product } from "../types/Product"

export interface IProductRepository {
    save(product:Product): Promise<void>
    findAll(): Promise<Product[]>
    findById(id: string): Promise<Product | null>
    findBySupplierId(supplier_id: string): Promise<Product[]>
    remove(bar_code: string): Promise<void>
    update(product: Product, id: string): Promise<void>
}