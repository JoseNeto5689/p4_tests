import sequelize from "../../database/connection"
import { Person } from "../../types/Person"
import { IPersonRepository } from "../IPersonRepository"

export class PersonRepository implements IPersonRepository {

    async findById(id: string): Promise<Person | null> {
        const result: Person | null = await sequelize.models.Person.findByPk(id) as Person | null
        return result
    }
    
    async save(person: Person): Promise<void> {
        await sequelize.models.Person.create({
            ...person
        })
    }

    async findAll(): Promise<Person[]> {
        const result =  await sequelize.models.Person.findAll()
        const persons: Person[] = []
        result.forEach((person: any) => {
            persons.push(person)
        })
        return persons
    }


}