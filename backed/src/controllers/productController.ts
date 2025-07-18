
import { createProductService, getAllProductsService, getProductByIdService, updateProductService, deleteProductService } from '@/services/productService';
import { Request, Response } from 'express';



export const createProductController = async (req:Request,res:Response) => {
    try {
        const product = req.body;
        const newProduct = await createProductService(product);
        res.status(201).json(newProduct);
        
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error',  error});

        
    }
    
}

export const getAllProductsController = async (req:Request, res:Response) => {
    try {
        const products = await getAllProductsService();
      if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}
export const getProductByIdController = async (req:Request, res:Response) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        const product = await getProductByIdService(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const updateProductController = async (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        
        const productData = req.body;
        const updatedProduct = await updateProductService(productId, productData);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found or update failed' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}

export const deleteProductController = async (req: Request, res: Response) => {
    try {
        const productId = parseInt(req.params.id);
        if (isNaN(productId)) {
            return res.status(400).json({ message: 'Invalid product ID' });
        }
        
        const deletedProduct = await deleteProductService(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found or deletion failed' });
        }
        res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
}