import { createOrderItemController, getAllOrderItemsController, getOrderItemByIdController, updateOrderItemController, deleteOrderItemController, getOrderItemsByOrderController, getOrderItemsByProductController } from '@/controllers/orderItemController';
import { Express } from 'express';

export const orderItemRoute = (app: Express) => {
    app.route('/order-items').post(
        async (req, res, next) => {
            try {
                await createOrderItemController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/order-items').get(
        async (req, res, next) => {
            try {
                await getAllOrderItemsController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/order-items/:id').get(
        async (req, res, next) => {
            try {
                await getOrderItemByIdController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/order-items/:id').put(
        async (req, res, next) => {
            try {
                await updateOrderItemController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/order-items/:id').delete(
        async (req, res, next) => {
            try {
                await deleteOrderItemController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/orders/:orderId/order-items').get(
        async (req, res, next) => {
            try {
                await getOrderItemsByOrderController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/products/:productId/order-items').get(
        async (req, res, next) => {
            try {
                await getOrderItemsByProductController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
}