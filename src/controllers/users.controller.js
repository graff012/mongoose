import UserService from "../services/users.service.js";

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async addUserController(req, res, next) {
    const body = req.body;

    try {
      const user = await this.userService.addUser(body);

      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
