import CategoryService from "../services/category.service.js";

class CategoryController {
  constructor() {
    this.categoryService = new CategoryService();
  }

  async addCategoryController(req, res, next) {
    const body = req.body;
    try {
      const addedCategory = await this.categoryService.addCategory(body);

      res.status(201).json(addedCategory);
    } catch (err) {
      next(err);
    }
  }
}

export default CategoryController;
