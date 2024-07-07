import sequelize from "../../database/connection"
import { Product } from "../../types/Product"
import { IProductRepository } from "../IProductRepository"

export class ProductRepository implements IProductRepository {

    async findBySupplierId(supplier_id: string): Promise<Product[]> {
        const result = await sequelize.models.Product.findAll({
            where: {
                supplier_id
            }
        })
        const products: Product[] = []
        result.forEach((product: any) => {
            products.push(product)
        })
        return products
    }
    
    async findById(id: string): Promise<Product | null> {
        const result: Product | null = await sequelize.models.Product.findByPk(id) as Product | null
        return result
    }

    async findAll(): Promise<Product[]> {
        const result = await sequelize.models.Product.findAll()
        const products: Product[] = []
        result.forEach((product: any) => {
            products.push(product)
        })
        return products
    }
    
    async save(product: Product): Promise<void> {
        await sequelize.models.Product.create({
            ...product
        })
    }

    async remove(barcode: string): Promise<void> {
        await sequelize.models.Product.destroy({
            where: {
                barcode
            }
        })
    }

    async update(product: Product, barcode: string): Promise<void> {
        await sequelize.models.Product.update({
            ...product
        }, {
            where: {
                barcode
            }
        })
    }
}