import { createOrderController, getAllOrdersController, getOrderByIdController, updateOrderController, deleteOrderController, getOrdersByUserController } from '@/controllers/orderController';
import { Express } from 'express';

export const orderRoute = (app: Express) => {
    app.route('/orders').post(
        async (req, res, next) => {
            try {
                await createOrderController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/orders').get(
        async (req, res, next) => {
            try {
                await getAllOrdersController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/orders/:id').get(
        async (req, res, next) => {
            try {
                await getOrderByIdController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/orders/:id').put(
        async (req, res, next) => {
            try {
                await updateOrderController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/orders/:id').delete(
        async (req, res, next) => {
            try {
                await deleteOrderController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
    app.route('/users/:userId/orders').get(
        async (req, res, next) => {
            try {
                await getOrdersByUserController(req, res);
            } catch (error) {
                next(error);
            }
        }
    );
}