import { categoryModel } from "../models/category.model.js";

class CategoryService {
  constructor() {
    this.categoryModel = categoryModel;
  }

  async addCategory(data) {
    const category = await this.categoryModel.create(data);

    return category;
  }

  async getAllCategories() {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async getCategoryById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid category ID", 400);
    }
    const category = await this.categoryModel.findById(id);
    return category;
  }

  async updateCategory(id, data) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid category ID", 400);
    }
    const updatedCategory = await this.categoryModel.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
    return updatedCategory;
  }

  async deleteCategory(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid category ID", 400);
    }
    const deletedCategory = await this.categoryModel.findByIdAndDelete(id);
    return deletedCategory;
  }
}

export default CategoryService;
