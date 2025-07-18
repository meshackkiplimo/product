import db from "@/Drizzle/db";
import { ProductTable, TIProduct } from "@/Drizzle/schema";





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



