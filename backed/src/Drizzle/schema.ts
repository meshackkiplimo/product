import {
  boolean,
  pgTable,
  serial,
  varchar,
  integer,
  decimal,
  timestamp,
  text
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";





export const UserTable = pgTable("users", {
    user_id: serial("user_id").primaryKey(),
    first_name: varchar("first_name", { length: 50 }).notNull(),
    last_name: varchar("last_name", { length: 50 }).notNull(),
    email: varchar("email", { length: 100 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    role: varchar("role", { length: 20 }).default("user").notNull(),
    is_verified: boolean("is_verified").default(false).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const ProductTable = pgTable("products", {
    product_id: serial("product_id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    description: text("description"),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    image_url: varchar("image_url", { length: 255 }),
    category_id: integer("category_id").notNull().references(() => CategoriesTable.category_id),
    status: varchar("status", { length: 20 }).default("available").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});
export const OrderTable = pgTable("orders", {
    order_id: serial("order_id").primaryKey(),
    user_id: integer("user_id").notNull().references(() => UserTable.user_id),
    total_price: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
    order_date: timestamp("order_date").defaultNow().notNull(),
    status: varchar("status", { length: 20 }).default("pending").notNull(),
    shipping_address: text("shipping_address").notNull(),
    billing_address: text("billing_address").notNull(),
    payment_status: varchar("payment_status", { length: 20 }).default("unpaid").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const CategoriesTable = pgTable("categories", {
    category_id: serial("category_id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull().unique(),
    description: text("description"),
    status: varchar("status", { length: 20 }).default("active").notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});
export const PaymentTable = pgTable("payments", {
    payment_id: serial("payment_id").primaryKey(),
    order_id: integer("order_id").notNull().references(() => OrderTable.order_id),
    user_id: integer("user_id").notNull().references(() => UserTable.user_id),
    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    payment_date: timestamp("payment_date").defaultNow().notNull(),
    payment_method: varchar("payment_method", { length: 50 }).notNull(),
    status: varchar("status", { length: 20 }).default("pending").notNull(),
    transaction_id: varchar("transaction_id", { length: 100 }).unique(),
    created_at: timestamp("created_at").defaultNow().notNull(),
    updated_at: timestamp("updated_at").defaultNow().notNull(),
});




// OrderItems table to handle many-to-many relationship between orders and products
export const OrderItemsTable = pgTable("order_items", {
    order_item_id: serial("order_item_id").primaryKey(),
    order_id: integer("order_id").notNull().references(() => OrderTable.order_id),
    product_id: integer("product_id").notNull().references(() => ProductTable.product_id),
    quantity: integer("quantity").notNull().default(1),
    unit_price: decimal("unit_price", { precision: 10, scale: 2 }).notNull(),
    total_price: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
    created_at: timestamp("created_at").defaultNow().notNull(),
});

// Define relationships between tables
export const userRelations = relations(UserTable, ({ many }) => ({
    orders: many(OrderTable),
    payments: many(PaymentTable),
}));

export const categoryRelations = relations(CategoriesTable, ({ many }) => ({
    products: many(ProductTable),
}));

export const productRelations = relations(ProductTable, ({ one, many }) => ({
    category: one(CategoriesTable, {
        fields: [ProductTable.category_id],
        references: [CategoriesTable.category_id],
    }),
    orderItems: many(OrderItemsTable),
}));

export const orderRelations = relations(OrderTable, ({ one, many }) => ({
    user: one(UserTable, {
        fields: [OrderTable.user_id],
        references: [UserTable.user_id],
    }),
    orderItems: many(OrderItemsTable),
    payments: many(PaymentTable),
}));

export const orderItemRelations = relations(OrderItemsTable, ({ one }) => ({
    order: one(OrderTable, {
        fields: [OrderItemsTable.order_id],
        references: [OrderTable.order_id],
    }),
    product: one(ProductTable, {
        fields: [OrderItemsTable.product_id],
        references: [ProductTable.product_id],
    }),
}));

export const paymentRelations = relations(PaymentTable, ({ one }) => ({
    order: one(OrderTable, {
        fields: [PaymentTable.order_id],
        references: [OrderTable.order_id],
    }),
    user: one(UserTable, {
        fields: [PaymentTable.user_id],
        references: [UserTable.user_id],
    }),
}));


// types

export type TIUser = typeof UserTable.$inferInsert
export type TSUser = typeof UserTable.$inferSelect
export type TIProduct = typeof ProductTable.$inferInsert
export type TSProduct = typeof ProductTable.$inferSelect
export type TIOrder = typeof OrderTable.$inferInsert
export type TSOrder = typeof OrderTable.$inferSelect
export type TICategory = typeof CategoriesTable.$inferInsert
export type TSCategory = typeof CategoriesTable.$inferSelect
export type TIPayment = typeof PaymentTable.$inferInsert
export type TSPayment = typeof PaymentTable.$inferSelect
export type TIOrderItem = typeof OrderItemsTable.$inferInsert
export type TSOrderItem = typeof OrderItemsTable.$inferSelect
