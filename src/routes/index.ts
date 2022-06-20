import { Router } from "express";

import { UsersRoutes } from "./createUsers/createUsersRoutes";

const router = Router();

router.use("/account", UsersRoutes);

export {router}