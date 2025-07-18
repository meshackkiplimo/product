import db from "@/Drizzle/db";
import { ProductTable, TIProduct } from "@/Drizzle/schema";
import { eq } from "drizzle-orm";





export const createProductService = async (product:TIProduct) => {
    const newProduct = await db.insert(ProductTable).values(product).returning()
    return newProduct;
    
}

export const getAllProductsService = async () => {
const products = await db.query.ProductTable.findMany({
    columns: {
        product_id: true,
        name: true,
        description: true,
        price: true,
        image_url: true,
        category_id: true,
        status: true,
    }
})
    return products;
}

export const getProductByIdService = async (productId:number) => {
    const product = await db.query.ProductTable.findFirst({
        where: (table, { eq }) => eq(table.product_id, productId),
        columns: {
            product_id: true,
            name: true,
            description: true,
            price: true,
            image_url: true,
            category_id: true,
            status: true,
        }
    });
    return product;
}

export const updateProductService = async (productId: number, product: Partial<TIProduct>) => {
    const updatedProduct = await db.update(ProductTable)
        .set(product)
        .where(eq(ProductTable.product_id, productId))
        .returning();
    return updatedProduct[0];
}

export const deleteProductService = async (productId: number) => {
    const deletedProduct = await db.delete(ProductTable)
        .where(eq(ProductTable.product_id, productId))
        .returning();
    return deletedProduct[0];
}

