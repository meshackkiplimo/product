import { createOrderItemService, getAllOrderItemsService, getOrderItemByIdService, updateOrderItemService, deleteOrderItemService, getOrderItemsByOrderService, getOrderItemsByProductService } from '@/services/orderItemService';
import { Request, Response } from 'express';

export const createOrderItemController = async (req: Request, res: Response) => {
    try {
        const orderItem = req.body;
        const newOrderItem = await createOrderItemService(orderItem);
        res.status(201).json(newOrderItem);
        
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getAllOrderItemsController = async (req: Request, res: Response) => {
    try {
        const orderItems = await getAllOrderItemsService();
        if (orderItems.length === 0) {
            return res.status(404).json({ message: 'No order items found' });
        }
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getOrderItemByIdController = async (req: Request, res: Response) => {
    try {
        const orderItemId = parseInt(req.params.id);
        if (isNaN(orderItemId)) {
            return res.status(400).json({ message: 'Invalid order item ID' });
        }
        const orderItem = await getOrderItemByIdService(orderItemId);
        if (!orderItem) {
            return res.status(404).json({ message: 'Order item not found' });
        }
        res.status(200).json(orderItem);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const updateOrderItemController = async (req: Request, res: Response) => {
    try {
        const orderItemId = parseInt(req.params.id);
        if (isNaN(orderItemId)) {
            return res.status(400).json({ message: 'Invalid order item ID' });
        }
        
        const orderItemData = req.body;
        const updatedOrderItem = await updateOrderItemService(orderItemId, orderItemData);
        if (!updatedOrderItem) {
            return res.status(404).json({ message: 'Order item not found or update failed' });
        }
        res.status(200).json(updatedOrderItem);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const deleteOrderItemController = async (req: Request, res: Response) => {
    try {
        const orderItemId = parseInt(req.params.id);
        if (isNaN(orderItemId)) {
            return res.status(400).json({ message: 'Invalid order item ID' });
        }
        
        const deletedOrderItem = await deleteOrderItemService(orderItemId);
        if (!deletedOrderItem) {
            return res.status(404).json({ message: 'Order item not found or deletion failed' });
        }
        res.status(200).json({ message: 'Order item deleted successfully', orderItem: deletedOrderItem });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getOrderItemsByOrderController = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.orderId);
        if (isNaN(orderId)) {
            return res.status(400).json({ message: 'Invalid order ID' });
        }
        const orderItems = await getOrderItemsByOrderService(orderId);
        if (orderItems.length === 0) {
            return res.status(404).json({ message: 'No order items found for this order' });
        }
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getOrderItemsByProductController = async (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.productId);
        if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        const orderItems = await getOrderItemsByProductService(productId);
        if (orderItems.length === 0) {
            return res.status(404).json({ message: 'No order items found for this product' });
        }
        res.status(200).json(orderItems);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}