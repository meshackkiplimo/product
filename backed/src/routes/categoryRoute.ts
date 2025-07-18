import { createCategoryController, getAllCategoriesController, getCategoryByIdController, updateCategoryController, deleteCategoryController } from '@/controllers/categoryController';
import { Express } from 'express';

export const categoryRoute = (app: Express) => {
    app.route('/categories').post(
        async (req, res, next) => {
            try {
                await createCategoryController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/categories').get(
        async (req, res, next) => {
            try {
                await getAllCategoriesController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/categories/:id').get(
        async (req, res, next) => {
            try {
                await getCategoryByIdController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/categories/:id').put(
        async (req, res, next) => {
            try {
                await updateCategoryController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/categories/:id').delete(
        async (req, res, next) => {
            try {
                await deleteCategoryController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
}