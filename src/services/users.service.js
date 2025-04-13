import { userModel } from "../models/users.model.js";

class UserService {
  constructor() {
    this.userModel = userModel;
  }

  async addUser(data) {
    const user = await this.userModel.create(data);

    return user;
  }

  async getAllUsers() {
    const users = await this.userModel.find().select("-password");
    return users;
  }

  async getUserById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid user ID", 400);
    }
    const user = await this.userModel.findById(id).select("-password");
    return user;
  }

  async updateUser(id, data) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid user ID", 400);
    }
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, data, { new: true })
      .select("-password");
    return updatedUser;
  }

  async deleteUser(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid user ID", 400);
    }
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default UserService;
