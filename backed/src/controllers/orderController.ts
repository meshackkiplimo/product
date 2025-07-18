import { createOrderService, getAllOrdersService, getOrderByIdService, updateOrderService, deleteOrderService, getOrdersByUserService } from '@/services/orderService';
import { Request, Response } from 'express';

export const createOrderController = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const newOrder = await createOrderService(order);
        res.status(201).json(newOrder);
        
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getAllOrdersController = async (req: Request, res: Response) => {
    try {
        const orders = await getAllOrdersService();
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found' });
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getOrderByIdController = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.id);
        if (isNaN(orderId)) {
            return res.status(400).json({ message: 'Invalid order ID' });
        }
        const order = await getOrderByIdService(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const updateOrderController = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.id);
        if (isNaN(orderId)) {
            return res.status(400).json({ message: 'Invalid order ID' });
        }
        
        const orderData = req.body;
        const updatedOrder = await updateOrderService(orderId, orderData);
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found or update failed' });
        }
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const deleteOrderController = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.id);
        if (isNaN(orderId)) {
            return res.status(400).json({ message: 'Invalid order ID' });
        }
        
        const deletedOrder = await deleteOrderService(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found or deletion failed' });
        }
        res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getOrdersByUserController = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }
        const orders = await getOrdersByUserService(userId);
        if (orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}