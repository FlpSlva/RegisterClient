import { getRepository, Repository } from "typeorm";
import {IUsersRepository} from "../IUsersRepository"
import {User} from "../../entities/User"
import { ICreateUsers } from "../../dtos/ICreateUsers";

class UsersRepository implements IUsersRepository {

    private repository?: Repository<User>

    constructor(){
        this.repository = getRepository(User)
    }

    async create({cpf, email, name, password, telephone}: ICreateUsers): Promise<void> {
        
        const users = this.repository.create({
            name,
            cpf,
            email,
            password,
            telephone
        })

        await this.repository.save(users);

    }

    async findByCpf(cpf: string): Promise<User>{

        const cpfUser = await this.repository.findOne(cpf)

        return cpfUser
    }

}

export {UsersRepository}