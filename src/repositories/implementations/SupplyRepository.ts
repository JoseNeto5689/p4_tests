import sequelize from "../../database/connection"
import { Supply } from "../../types/Supply"
import { ISupplyRepository } from "../ISupplyRepository"

export class SupplyRepository implements ISupplyRepository {
    async findAll(): Promise<unknown> {
        const supplies = await sequelize.models.Supply.findAll()
        return supplies
    }
    
    async save(supply: Supply): Promise<void> {
        await sequelize.models.Supply.create({
            ...supply
        })
    }
}