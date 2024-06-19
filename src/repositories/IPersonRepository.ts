import { Person } from "../types/Person"

export interface IPersonRepository {
    save(person:Person): Promise<void>
    findAll(): Promise<Person[]>
    findById(id: string): Promise<Person | null>
    findByName(name: string): Promise<Person | null>
    remove(id: string): Promise<void>
    update(person: Person, id: string): Promise<void>
}