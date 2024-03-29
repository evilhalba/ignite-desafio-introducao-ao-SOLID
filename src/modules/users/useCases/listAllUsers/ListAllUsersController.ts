import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const id = user_id.toString();
    try {
      const listUsers = this.listAllUsersUseCase.execute({ user_id: id });
      return response.status(200).send(listUsers);
    } catch (err) {
      return response.status(400).send({ error: "mensagem do erro" });
    }
  }
}

export { ListAllUsersController };
