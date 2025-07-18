import db from "@/Drizzle/db";
import { CategoriesTable, TICategory } from "@/Drizzle/schema";
import { eq } from "drizzle-orm";

export const createCategoryService = async (category: TICategory) => {
    const newCategory = await db.insert(CategoriesTable).values(category).returning();
    return newCategory[0];
}

export const getAllCategoriesService = async () => {
    const categories = await db.query.CategoriesTable.findMany({
        columns: {
            category_id: true,
            name: true,
            description: true,
            status: true,
        }
    });
    return categories;
}

export const getCategoryByIdService = async (categoryId: number) => {
    const category = await db.query.CategoriesTable.findFirst({
        where: (table, { eq }) => eq(table.category_id, categoryId),
        columns: {
            category_id: true,
            name: true,
            description: true,
            status: true,
        }
    });
    return category;
}

export const updateCategoryService = async (categoryId: number, category: Partial<TICategory>) => {
    const updatedCategory = await db.update(CategoriesTable)
        .set(category)
        .where(eq(CategoriesTable.category_id, categoryId))
        .returning();
    return updatedCategory[0];
}

export const deleteCategoryService = async (categoryId: number) => {
    const deletedCategory = await db.delete(CategoriesTable)
        .where(eq(CategoriesTable.category_id, categoryId))
        .returning();
    return deletedCategory[0];
}