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

  async getAllCategoriesController(req, res, next) {
    try {
      const categories = await this.categoryService.getAllCategories();
      res.status(200).json(categories);
    } catch (err) {
      next(err);
    }
  }

  async getCategoryByIdController(req, res, next) {
    const { id } = req.params;
    try {
      const category = await this.categoryService.getCategoryById(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  }

  async updateCategoryController(req, res, next) {
    const { id } = req.params;
    const body = req.body;
    try {
      const updatedCategory = await this.categoryService.updateCategory(
        id,
        body
      );
      if (!updatedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(updatedCategory);
    } catch (err) {
      next(err);
    }
  }

  async deleteCategoryController(req, res, next) {
    const { id } = req.params;
    try {
      const deletedCategory = await this.categoryService.deleteCategory(id);
      if (!deletedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

export default CategoryController;
