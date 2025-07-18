import dotenv from 'dotenv';
import express from 'express';
import db, { client } from './Drizzle/db';
import { authRoute } from './routes/authRoute';
import { productRoute } from './routes/productRoute';
import { categoryRoute } from './routes/categoryRoute';
import { orderRoute } from './routes/orderRoute';
import { paymentRoute } from './routes/paymentRoute';
import { orderItemRoute } from './routes/orderItemRoute';
import cors from 'cors';


dotenv.config();

export const app = express();

app.use(cors({
  origin:"http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))




// middleware
app.use(express.json());
// cors for all origins





 


app.get('/', (req, res) => {
  res.send('Hello World!');
});
const  port = process.env.PORT

authRoute(app);
productRoute(app);
categoryRoute(app);
orderRoute(app);
paymentRoute(app);
orderItemRoute(app);


app.listen(port, () => {
    client
    
  console.log(`Server is running on http://localhost:${port}`);
});