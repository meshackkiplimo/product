import { createPaymentService, getAllPaymentsService, getPaymentByIdService, updatePaymentService, deletePaymentService, getPaymentsByOrderService, getPaymentsByUserService } from '@/services/paymentService';
import { Request, Response } from 'express';

export const createPaymentController = async (req: Request, res: Response) => {
    try {
        const payment = req.body;
        const newPayment = await createPaymentService(payment);
        res.status(201).json(newPayment);
        
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getAllPaymentsController = async (req: Request, res: Response) => {
    try {
        const payments = await getAllPaymentsService();
        if (payments.length === 0) {
            return res.status(404).json({ message: 'No payments found' });
        }
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getPaymentByIdController = async (req: Request, res: Response) => {
    try {
        const paymentId = parseInt(req.params.id);
        if (isNaN(paymentId)) {
            return res.status(400).json({ message: 'Invalid payment ID' });
        }
        const payment = await getPaymentByIdService(paymentId);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const updatePaymentController = async (req: Request, res: Response) => {
    try {
        const paymentId = parseInt(req.params.id);
        if (isNaN(paymentId)) {
            return res.status(400).json({ message: 'Invalid payment ID' });
        }
        
        const paymentData = req.body;
        const updatedPayment = await updatePaymentService(paymentId, paymentData);
        if (!updatedPayment) {
            return res.status(404).json({ message: 'Payment not found or update failed' });
        }
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const deletePaymentController = async (req: Request, res: Response) => {
    try {
        const paymentId = parseInt(req.params.id);
        if (isNaN(paymentId)) {
            return res.status(400).json({ message: 'Invalid payment ID' });
        }
        
        const deletedPayment = await deletePaymentService(paymentId);
        if (!deletedPayment) {
            return res.status(404).json({ message: 'Payment not found or deletion failed' });
        }
        res.status(200).json({ message: 'Payment deleted successfully', payment: deletedPayment });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getPaymentsByOrderController = async (req: Request, res: Response) => {
    try {
        const orderId = parseInt(req.params.orderId);
        if (isNaN(orderId)) {
            return res.status(400).json({ message: 'Invalid order ID' });
        }
        const payments = await getPaymentsByOrderService(orderId);
        if (payments.length === 0) {
            return res.status(404).json({ message: 'No payments found for this order' });
        }
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const getPaymentsByUserController = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }
        const payments = await getPaymentsByUserService(userId);
        if (payments.length === 0) {
            return res.status(404).json({ message: 'No payments found for this user' });
        }
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}