import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIDomain } from "../../utils/utils";

export type TProduct = {
    product_id: number;
    name: string;
    description: string;
    price: string;
    image_url: string;
    category_id: number;
    status: string;
    created_at: string;
    updated_at: string;
}

export type TCreateProduct = {
    name: string;
    description: string;
    price: string;
    image_url: string;
    category_id: number;
    status?: string;
}

export type TUpdateProduct = Partial<TCreateProduct>;

export const ProductsApi = createApi({
    reducerPath: 'ProductsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: APIDomain,
        prepareHeaders: (headers, { getState }) => {
            // Add authorization header if user is logged in
            const token = (getState() as any).user.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getAllProducts: builder.query<TProduct[], void>({
            query: () => '/products',
            providesTags: ['Product']
        }),
        getProductById: builder.query<TProduct, number>({
            query: (id) => `/products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Product', id }]
        }),
        createProduct: builder.mutation<TProduct[], TCreateProduct>({
            query: (productData) => ({
                url: '/products',
                method: 'POST',
                body: productData
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<TProduct, { id: number; data: TUpdateProduct }>({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }]
        }),
        deleteProduct: builder.mutation<{ message: string; product: TProduct }, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Product', id }]
        })
    })
});

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = ProductsApi;