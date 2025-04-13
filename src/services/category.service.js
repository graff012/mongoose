import { categoryModel } from "../models/category.model.js";

class CategoryService {
  constructor() {
    this.categoryModel = categoryModel;
  }

  async addCategory(data) {
    const category = await this.categoryModel.create(data);

    return category;
  }
}

export default CategoryService;
