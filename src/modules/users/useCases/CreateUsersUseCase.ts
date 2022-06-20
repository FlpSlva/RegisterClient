import { inject, injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import {  ICreateUsers } from "../dtos/ICreateUsers";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class CreateUsersUseCase {

    // Injeção de dependencias

    constructor(
        @inject("UsersRepository")
        private createUsersUseCase: IUsersRepository
    ){}

    async execute({cpf, email, name, password, telephone}: ICreateUsers): Promise<void> {
    
        const cpfAlreadyExists = await this.createUsersUseCase.findByCpf(cpf)

        if(cpfAlreadyExists){
            throw new AppError("Esse Cpf Ja Está Em Uso !")
        }

        await this.createUsersUseCase.create({
            cpf,
            email,
            name,
            password,
            telephone
        })

    }
}

export {CreateUsersUseCase}