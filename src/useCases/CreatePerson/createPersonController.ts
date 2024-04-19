import { Request, Response } from "express"
import { CreatePersonUseCase } from "./createPersonUseCase"
import { IPersonRequestDTO } from "./createPersonDTO"

export class CreatePersonController{
    
    constructor(
        private createPersonUseCase: CreatePersonUseCase,
    ) {}

    async handle (request: Request, reponse: Response) {

        const data:IPersonRequestDTO = request.body

        await this.createPersonUseCase.execute({
            ...data
        })

        return reponse.json("ok")
        
    }
}