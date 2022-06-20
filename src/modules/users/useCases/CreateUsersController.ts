import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UsersRepository } from '../repositories/implementations/UsersRepository copy'


class CreateUsersController {
    async handle(req: Request, res: Response): Promise<Response>{

        const {cpf, email, name, password, telephone } = req.body

        const createUsersUseCase = container.resolve(UsersRepository)

        await createUsersUseCase.create({cpf, email, name, password, telephone})

        return res.status(201).json({message: "Criado Com Sucesso !"});
    }
}

export {CreateUsersController}