import { container } from "tsyringe";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository copy";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.register<IUsersRepository>(

    "UsersRepository",
    UsersRepository

)