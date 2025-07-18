import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIDomain } from "../../utils/utils";

export type TAdminProduct = {
    product_id: number;
    name: string;
    description: string;
    price: string;
    category_id: number;
    status: string;
    created_at: string;
    updated_at: string;
}

export type TCreateAdminProduct = {
    name: string;
    description: string;
    price: string;
    category_id: number;
    status?: string;
}

export type TUpdateAdminProduct = Partial<TCreateAdminProduct>;

export const AdminProductsApi = createApi({
    reducerPath: 'AdminProductsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: APIDomain,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as any).user.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['AdminProduct'],
    endpoints: (builder) => ({
        getAllAdminProducts: builder.query<TAdminProduct[], void>({
            query: () => '/products',
            transformResponse: (response: any[]) => {
                // Remove image_url from the response for admin view
                return response.map(({ image_url, ...product }) => product);
            },
            providesTags: ['AdminProduct']
        }),
        getAdminProductById: builder.query<TAdminProduct, number>({
            query: (id) => `/products/${id}`,
            transformResponse: (response: any) => {
                // Remove image_url from the response for admin view
                const { image_url, ...product } = response;
                return product;
            },
            providesTags: (result, error, id) => [{ type: 'AdminProduct', id }]
        }),
        createAdminProduct: builder.mutation<TAdminProduct[], TCreateAdminProduct>({
            query: (productData) => ({
                url: '/products',
                method: 'POST',
                body: productData
            }),
            invalidatesTags: ['AdminProduct']
        }),
        updateAdminProduct: builder.mutation<TAdminProduct, { id: number; data: TUpdateAdminProduct }>({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'AdminProduct', id }]
        }),
        deleteAdminProduct: builder.mutation<{ message: string; product: TAdminProduct }, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'AdminProduct', id }]
        })
    })
});

export const {
    useGetAllAdminProductsQuery,
    useGetAdminProductByIdQuery,
    useCreateAdminProductMutation,
    useUpdateAdminProductMutation,
    useDeleteAdminProductMutation
} = AdminProductsApi;