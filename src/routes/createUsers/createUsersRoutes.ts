import { Router } from "express";
import { CreateUsersController } from "../../modules/users/useCases/CreateUsersController";

const UsersRoutes = Router();
const CreateUsers = new CreateUsersController();


UsersRoutes.post("/create", CreateUsers.handle)

export {UsersRoutes}