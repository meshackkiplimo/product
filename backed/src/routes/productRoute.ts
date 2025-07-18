
import { createProductController, getAllProductsController, getProductByIdController } from '@/controllers/productController';
import { Express } from 'express';


export const productRoute = (app: Express) => {
    app.route('/products').post(
        async (req, res, next) => {
            try {
                await createProductController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/products').get(
        async (req, res, next) => {
            try {
                await getAllProductsController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/products/:id').get(
        async (req, res, next) => {
            try {
                await getProductByIdController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
}