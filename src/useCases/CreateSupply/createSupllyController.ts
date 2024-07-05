import { Request, Response } from "express"
import { CreateSupplyDTO } from "./createSupplyDTO"
import { CreateSupplyUseCase } from "./createSupplyUseCase"
import { z } from "zod"
import { generateMessageArray } from "../../utils/zodError"

export class CreateSupplyController {
    constructor(
        private createSupplyUseCase: CreateSupplyUseCase
    ) {}
    
    async handle (request: Request, response: Response) {
        try {
            CreateSupplyDTO.parse(request.body)

            const data:z.infer<typeof CreateSupplyDTO> = request.body
            await this.createSupplyUseCase.execute({
                ...data
            })
            return response.json("ok")
        }
        catch(err:any){
            const message = generateMessageArray(err)
            return response.status(400).json({errors: message})
        }
        
    }
}