import { userModel } from "../models/users.model.js";

class UserService {
  constructor() {
    this.userModel = userModel;
  }

  async addUser(data) {
    const user = await this.userModel.create(data);

    return user;
  }
}

export default UserService;
