import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIDomain } from "../../utils/utils";

export type TPayment = {
    payment_id: number;
    order_id: number;
    user_id: number;
    amount: string;
    payment_date: string;
    payment_method: string;
    status: string;
    transaction_id: string;
    created_at: string;
    updated_at: string;
}

export type TCreatePayment = {
    order_id: number;
    user_id: number;
    amount: string;
    payment_method: string;
    status?: string;
    transaction_id?: string;
}

export type TUpdatePayment = Partial<TCreatePayment>;

export const PaymentsApi = createApi({
    reducerPath: 'PaymentsApi',
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
    tagTypes: ['Payment'],
    endpoints: (builder) => ({
        getAllPayments: builder.query<TPayment[], void>({
            query: () => '/payments',
            providesTags: ['Payment']
        }),
        getPaymentById: builder.query<TPayment, number>({
            query: (id) => `/payments/${id}`,
            providesTags: (result, error, id) => [{ type: 'Payment', id }]
        }),
        createPayment: builder.mutation<TPayment, TCreatePayment>({
            query: (paymentData) => ({
                url: '/payments',
                method: 'POST',
                body: paymentData
            }),
            invalidatesTags: ['Payment']
        }),
        updatePayment: builder.mutation<TPayment, { id: number; data: TUpdatePayment }>({
            query: ({ id, data }) => ({
                url: `/payments/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Payment', id }]
        }),
        deletePayment: builder.mutation<{ message: string; payment: TPayment }, number>({
            query: (id) => ({
                url: `/payments/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Payment', id }]
        }),
        getPaymentsByOrder: builder.query<TPayment[], number>({
            query: (orderId) => `/orders/${orderId}/payments`,
            providesTags: ['Payment']
        }),
        getPaymentsByUser: builder.query<TPayment[], number>({
            query: (userId) => `/users/${userId}/payments`,
            providesTags: ['Payment']
        })
    })
});

export const {
    useGetAllPaymentsQuery,
    useGetPaymentByIdQuery,
    useCreatePaymentMutation,
    useUpdatePaymentMutation,
    useDeletePaymentMutation,
    useGetPaymentsByOrderQuery,
    useGetPaymentsByUserQuery
} = PaymentsApi;