import db from "@/Drizzle/db";
import { OrderTable, TIOrder } from "@/Drizzle/schema";
import { eq } from "drizzle-orm";

export const createOrderService = async (order: TIOrder) => {
    const newOrder = await db.insert(OrderTable).values(order).returning();
    return newOrder[0];
}

export const getAllOrdersService = async () => {
    const orders = await db.query.OrderTable.findMany({
        columns: {
            order_id: true,
            user_id: true,
            total_price: true,
            order_date: true,
            status: true,
            shipping_address: true,
            billing_address: true,
            payment_status: true,
        }
    });
    return orders;
}

export const getOrderByIdService = async (orderId: number) => {
    const order = await db.query.OrderTable.findFirst({
        where: (table, { eq }) => eq(table.order_id, orderId),
        columns: {
            order_id: true,
            user_id: true,
            total_price: true,
            order_date: true,
            status: true,
            shipping_address: true,
            billing_address: true,
            payment_status: true,
        }
    });
    return order;
}

export const updateOrderService = async (orderId: number, order: Partial<TIOrder>) => {
    const updatedOrder = await db.update(OrderTable)
        .set(order)
        .where(eq(OrderTable.order_id, orderId))
        .returning();
    return updatedOrder[0];
}

export const deleteOrderService = async (orderId: number) => {
    const deletedOrder = await db.delete(OrderTable)
        .where(eq(OrderTable.order_id, orderId))
        .returning();
    return deletedOrder[0];
}

export const getOrdersByUserService = async (userId: number) => {
    const orders = await db.query.OrderTable.findMany({
        where: (table, { eq }) => eq(table.user_id, userId),
        columns: {
            order_id: true,
            user_id: true,
            total_price: true,
            order_date: true,
            status: true,
            shipping_address: true,
            billing_address: true,
            payment_status: true,
        }
    });
    return orders;
}