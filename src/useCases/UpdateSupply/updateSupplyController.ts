import { Request, Response } from "express"
import { UpdateSupplyUseCase } from "./updateSupplyUseCase"
import { UpdateSupplyDTO } from "./updateSupplyDTO"
import { z } from "zod"
import { generateMessageArray } from "../../utils/zodError"

export class UpdateSupplyController {
    constructor(
        private updateSupplyUseCase: UpdateSupplyUseCase
    ) {}

    async handle(request: Request, response: Response) {
        try {
            UpdateSupplyDTO.parse(request.body)
            const data:z.infer<typeof UpdateSupplyDTO> = request.body
    
            const { id } = request.params
            await this.updateSupplyUseCase.execute(data, id)
            return response.json("ok")
        }
        catch (err:any) {
            const message = generateMessageArray(err)
            return response.status(400).json({errors: message}) 
        }
    }
}