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

  async getAllUsersController(req, res, next) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async getUserByIdController(req, res, next) {
    const { id } = req.params;
    try {
      const user = await this.userService.getUserById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  async updateUserController(req, res, next) {
    const { id } = req.params;
    const body = req.body;
    try {
      const updatedUser = await this.userService.updateUser(id, body);
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  async deleteUserController(req, res, next) {
    const { id } = req.params;
    try {
      const deletedUser = await this.userService.deleteUser(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
