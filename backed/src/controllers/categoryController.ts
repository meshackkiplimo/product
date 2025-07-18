import { createCategoryService, getAllCategoriesService, getCategoryByIdService, updateCategoryService, deleteCategoryService } from '@/services/categoryService';
import { Request, Response } from 'express';

export const createCategoryController = async (req: Request, res: Response) => {
    try {
        const category = req.body;
        const newCategory = await createCategoryService(category);
        res.status(201).json(newCategory);
        
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getAllCategoriesController = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategoriesService();
        if (categories.length === 0) {
            return res.status(404).json({ message: 'No categories found' });
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getCategoryByIdController = async (req: Request, res: Response) => {
    try {
        const categoryId = parseInt(req.params.id);
        if (isNaN(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID' });
        }
        const category = await getCategoryByIdService(categoryId);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const updateCategoryController = async (req: Request, res: Response) => {
    try {
        const categoryId = parseInt(req.params.id);
        if (isNaN(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID' });
        }
        
        const categoryData = req.body;
        const updatedCategory = await updateCategoryService(categoryId, categoryData);
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found or update failed' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const deleteCategoryController = async (req: Request, res: Response) => {
    try {
        const categoryId = parseInt(req.params.id);
        if (isNaN(categoryId)) {
            return res.status(400).json({ message: 'Invalid category ID' });
        }
        
        const deletedCategory = await deleteCategoryService(categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found or deletion failed' });
        }
        res.status(200).json({ message: 'Category deleted successfully', category: deletedCategory });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}