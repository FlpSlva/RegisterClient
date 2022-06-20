import {ICreateUsers} from "../dtos/ICreateUsers"
import { User } from "../entities/User"



interface IUsersRepository{
    create(data: ICreateUsers): Promise<void>
    findByCpf(cpf: string): Promise<User>
}

export {IUsersRepository}