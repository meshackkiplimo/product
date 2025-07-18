import db from "@/Drizzle/db";
import { PaymentTable, TIPayment } from "@/Drizzle/schema";
import { eq } from "drizzle-orm";

export const createPaymentService = async (payment: TIPayment) => {
    const newPayment = await db.insert(PaymentTable).values(payment).returning();
    return newPayment[0];
}

export const getAllPaymentsService = async () => {
    const payments = await db.query.PaymentTable.findMany({
        columns: {
            payment_id: true,
            order_id: true,
            user_id: true,
            amount: true,
            payment_date: true,
            payment_method: true,
            status: true,
            transaction_id: true,
        }
    });
    return payments;
}

export const getPaymentByIdService = async (paymentId: number) => {
    const payment = await db.query.PaymentTable.findFirst({
        where: (table, { eq }) => eq(table.payment_id, paymentId),
        columns: {
            payment_id: true,
            order_id: true,
            user_id: true,
            amount: true,
            payment_date: true,
            payment_method: true,
            status: true,
            transaction_id: true,
        }
    });
    return payment;
}

export const updatePaymentService = async (paymentId: number, payment: Partial<TIPayment>) => {
    const updatedPayment = await db.update(PaymentTable)
        .set(payment)
        .where(eq(PaymentTable.payment_id, paymentId))
        .returning();
    return updatedPayment[0];
}

export const deletePaymentService = async (paymentId: number) => {
    const deletedPayment = await db.delete(PaymentTable)
        .where(eq(PaymentTable.payment_id, paymentId))
        .returning();
    return deletedPayment[0];
}

export const getPaymentsByOrderService = async (orderId: number) => {
    const payments = await db.query.PaymentTable.findMany({
        where: (table, { eq }) => eq(table.order_id, orderId),
        columns: {
            payment_id: true,
            order_id: true,
            user_id: true,
            amount: true,
            payment_date: true,
            payment_method: true,
            status: true,
            transaction_id: true,
        }
    });
    return payments;
}

export const getPaymentsByUserService = async (userId: number) => {
    const payments = await db.query.PaymentTable.findMany({
        where: (table, { eq }) => eq(table.user_id, userId),
        columns: {
            payment_id: true,
            order_id: true,
            user_id: true,
            amount: true,
            payment_date: true,
            payment_method: true,
            status: true,
            transaction_id: true,
        }
    });
    return payments;
}