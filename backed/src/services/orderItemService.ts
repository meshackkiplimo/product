import db from "@/Drizzle/db";
import { OrderItemsTable, TIOrderItem } from "@/Drizzle/schema";
import { eq } from "drizzle-orm";

export const createOrderItemService = async (orderItem: TIOrderItem) => {
    const newOrderItem = await db.insert(OrderItemsTable).values(orderItem).returning();
    return newOrderItem[0];
}

export const getAllOrderItemsService = async () => {
    const orderItems = await db.query.OrderItemsTable.findMany({
        columns: {
            order_item_id: true,
            order_id: true,
            product_id: true,
            quantity: true,
            unit_price: true,
            total_price: true,
        }
    });
    return orderItems;
}

export const getOrderItemByIdService = async (orderItemId: number) => {
    const orderItem = await db.query.OrderItemsTable.findFirst({
        where: (table, { eq }) => eq(table.order_item_id, orderItemId),
        columns: {
            order_item_id: true,
            order_id: true,
            product_id: true,
            quantity: true,
            unit_price: true,
            total_price: true,
        }
    });
    return orderItem;
}

export const updateOrderItemService = async (orderItemId: number, orderItem: Partial<TIOrderItem>) => {
    const updatedOrderItem = await db.update(OrderItemsTable)
        .set(orderItem)
        .where(eq(OrderItemsTable.order_item_id, orderItemId))
        .returning();
    return updatedOrderItem[0];
}

export const deleteOrderItemService = async (orderItemId: number) => {
    const deletedOrderItem = await db.delete(OrderItemsTable)
        .where(eq(OrderItemsTable.order_item_id, orderItemId))
        .returning();
    return deletedOrderItem[0];
}

export const getOrderItemsByOrderService = async (orderId: number) => {
    const orderItems = await db.query.OrderItemsTable.findMany({
        where: (table, { eq }) => eq(table.order_id, orderId),
        columns: {
            order_item_id: true,
            order_id: true,
            product_id: true,
            quantity: true,
            unit_price: true,
            total_price: true,
        }
    });
    return orderItems;
}

export const getOrderItemsByProductService = async (productId: number) => {
    const orderItems = await db.query.OrderItemsTable.findMany({
        where: (table, { eq }) => eq(table.product_id, productId),
        columns: {
            order_item_id: true,
            order_id: true,
            product_id: true,
            quantity: true,
            unit_price: true,
            total_price: true,
        }
    });
    return orderItems;
}