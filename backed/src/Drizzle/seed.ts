import db from './db';
import { 
  UserTable, 
  CategoriesTable, 
  ProductTable, 
  OrderTable, 
  OrderItemsTable, 
  PaymentTable 
} from './schema';

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // 1. Seed Users (10 users)
    console.log('👥 Seeding users...');
    const users = await db.insert(UserTable).values([
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        password: 'hashedpassword123',
        role: 'admin',
        is_verified: true
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: true
      },
      {
        first_name: 'Mike',
        last_name: 'Johnson',
        email: 'mike.johnson@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: false
      },
      {
        first_name: 'Sarah',
        last_name: 'Williams',
        email: 'sarah.williams@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: true
      },
      {
        first_name: 'David',
        last_name: 'Brown',
        email: 'david.brown@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: true
      },
      {
        first_name: 'Emily',
        last_name: 'Davis',
        email: 'emily.davis@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: true
      },
      {
        first_name: 'James',
        last_name: 'Wilson',
        email: 'james.wilson@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: false
      },
      {
        first_name: 'Lisa',
        last_name: 'Garcia',
        email: 'lisa.garcia@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: true
      },
      {
        first_name: 'Robert',
        last_name: 'Martinez',
        email: 'robert.martinez@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: true
      },
      {
        first_name: 'Amanda',
        last_name: 'Anderson',
        email: 'amanda.anderson@example.com',
        password: 'hashedpassword123',
        role: 'user',
        is_verified: true
      }
    ]).returning();

    // 2. Seed Categories (10 categories)
    console.log('📂 Seeding categories...');
    const categories = await db.insert(CategoriesTable).values([
      {
        name: 'Electronics',
        description: 'Electronic devices and gadgets',
        status: 'active'
      },
      {
        name: 'Clothing',
        description: 'Fashion and apparel',
        status: 'active'
      },
      {
        name: 'Books',
        description: 'Books and literature',
        status: 'active'
      },
      {
        name: 'Home & Garden',
        description: 'Home improvement and gardening items',
        status: 'active'
      },
      {
        name: 'Sports',
        description: 'Sports equipment and accessories',
        status: 'active'
      },
      {
        name: 'Beauty',
        description: 'Beauty and personal care products',
        status: 'active'
      },
      {
        name: 'Toys',
        description: 'Toys and games for all ages',
        status: 'active'
      },
      {
        name: 'Automotive',
        description: 'Car parts and accessories',
        status: 'active'
      },
      {
        name: 'Food',
        description: 'Food and beverages',
        status: 'active'
      },
      {
        name: 'Health',
        description: 'Health and wellness products',
        status: 'active'
      }
    ]).returning();

    // 3. Seed Products (10 products)
    console.log('📦 Seeding products...');
    const products = await db.insert(ProductTable).values([
      {
        name: 'iPhone 15 Pro',
        description: 'Latest Apple smartphone with advanced features',
        price: '999.99',
        image_url: 'https://example.com/iphone15.jpg',
        category_id: categories[0].category_id, // Electronics
        status: 'available'
      },
      {
        name: 'Nike Air Max',
        description: 'Comfortable running shoes',
        price: '129.99',
        image_url: 'https://example.com/nike-airmax.jpg',
        category_id: categories[1].category_id, // Clothing
        status: 'available'
      },
      {
        name: 'The Great Gatsby',
        description: 'Classic American novel by F. Scott Fitzgerald',
        price: '12.99',
        image_url: 'https://example.com/great-gatsby.jpg',
        category_id: categories[2].category_id, // Books
        status: 'available'
      },
      {
        name: 'Garden Tool Set',
        description: 'Complete set of essential gardening tools',
        price: '49.99',
        image_url: 'https://example.com/garden-tools.jpg',
        category_id: categories[3].category_id, // Home & Garden
        status: 'available'
      },
      {
        name: 'Basketball',
        description: 'Professional quality basketball',
        price: '29.99',
        image_url: 'https://example.com/basketball.jpg',
        category_id: categories[4].category_id, // Sports
        status: 'available'
      },
      {
        name: 'Facial Moisturizer',
        description: 'Hydrating facial moisturizer for all skin types',
        price: '24.99',
        image_url: 'https://example.com/moisturizer.jpg',
        category_id: categories[5].category_id, // Beauty
        status: 'available'
      },
      {
        name: 'LEGO Building Set',
        description: 'Creative building blocks for kids',
        price: '39.99',
        image_url: 'https://example.com/lego.jpg',
        category_id: categories[6].category_id, // Toys
        status: 'available'
      },
      {
        name: 'Car Phone Mount',
        description: 'Universal smartphone mount for cars',
        price: '19.99',
        image_url: 'https://example.com/phone-mount.jpg',
        category_id: categories[7].category_id, // Automotive
        status: 'available'
      },
      {
        name: 'Organic Coffee Beans',
        description: 'Premium organic coffee beans',
        price: '15.99',
        image_url: 'https://example.com/coffee.jpg',
        category_id: categories[8].category_id, // Food
        status: 'available'
      },
      {
        name: 'Vitamin D Supplement',
        description: 'Daily vitamin D3 supplement',
        price: '18.99',
        image_url: 'https://example.com/vitamin-d.jpg',
        category_id: categories[9].category_id, // Health
        status: 'available'
      }
    ]).returning();

    // 4. Seed Orders (10 orders)
    console.log('🛒 Seeding orders...');
    const orders = await db.insert(OrderTable).values([
      {
        user_id: users[0].user_id,
        total_price: '1029.98',
        status: 'completed',
        shipping_address: '123 Main St, New York, NY 10001',
        billing_address: '123 Main St, New York, NY 10001',
        payment_status: 'paid'
      },
      {
        user_id: users[1].user_id,
        total_price: '142.98',
        status: 'shipped',
        shipping_address: '456 Oak Ave, Los Angeles, CA 90210',
        billing_address: '456 Oak Ave, Los Angeles, CA 90210',
        payment_status: 'paid'
      },
      {
        user_id: users[2].user_id,
        total_price: '62.98',
        status: 'pending',
        shipping_address: '789 Pine St, Chicago, IL 60601',
        billing_address: '789 Pine St, Chicago, IL 60601',
        payment_status: 'pending'
      },
      {
        user_id: users[3].user_id,
        total_price: '79.98',
        status: 'processing',
        shipping_address: '321 Elm St, Houston, TX 77001',
        billing_address: '321 Elm St, Houston, TX 77001',
        payment_status: 'paid'
      },
      {
        user_id: users[4].user_id,
        total_price: '54.98',
        status: 'completed',
        shipping_address: '654 Maple Dr, Phoenix, AZ 85001',
        billing_address: '654 Maple Dr, Phoenix, AZ 85001',
        payment_status: 'paid'
      },
      {
        user_id: users[5].user_id,
        total_price: '44.98',
        status: 'shipped',
        shipping_address: '987 Cedar Ln, Philadelphia, PA 19101',
        billing_address: '987 Cedar Ln, Philadelphia, PA 19101',
        payment_status: 'paid'
      },
      {
        user_id: users[6].user_id,
        total_price: '59.98',
        status: 'cancelled',
        shipping_address: '147 Birch St, San Antonio, TX 78201',
        billing_address: '147 Birch St, San Antonio, TX 78201',
        payment_status: 'refunded'
      },
      {
        user_id: users[7].user_id,
        total_price: '35.98',
        status: 'completed',
        shipping_address: '258 Walnut Ave, San Diego, CA 92101',
        billing_address: '258 Walnut Ave, San Diego, CA 92101',
        payment_status: 'paid'
      },
      {
        user_id: users[8].user_id,
        total_price: '34.98',
        status: 'processing',
        shipping_address: '369 Cherry St, Dallas, TX 75201',
        billing_address: '369 Cherry St, Dallas, TX 75201',
        payment_status: 'paid'
      },
      {
        user_id: users[9].user_id,
        total_price: '38.98',
        status: 'shipped',
        shipping_address: '741 Spruce Rd, San Jose, CA 95101',
        billing_address: '741 Spruce Rd, San Jose, CA 95101',
        payment_status: 'paid'
      }
    ]).returning();

    // 5. Seed Order Items (multiple items per order)
    console.log('📋 Seeding order items...');
    await db.insert(OrderItemsTable).values([
      // Order 1 items
      {
        order_id: orders[0].order_id,
        product_id: products[0].product_id,
        quantity: 1,
        unit_price: '999.99',
        total_price: '999.99'
      },
      {
        order_id: orders[0].order_id,
        product_id: products[2].product_id,
        quantity: 2,
        unit_price: '12.99',
        total_price: '25.98'
      },
      // Order 2 items
      {
        order_id: orders[1].order_id,
        product_id: products[1].product_id,
        quantity: 1,
        unit_price: '129.99',
        total_price: '129.99'
      },
      {
        order_id: orders[1].order_id,
        product_id: products[2].product_id,
        quantity: 1,
        unit_price: '12.99',
        total_price: '12.99'
      },
      // Order 3 items
      {
        order_id: orders[2].order_id,
        product_id: products[3].product_id,
        quantity: 1,
        unit_price: '49.99',
        total_price: '49.99'
      },
      {
        order_id: orders[2].order_id,
        product_id: products[2].product_id,
        quantity: 1,
        unit_price: '12.99',
        total_price: '12.99'
      },
      // Order 4 items
      {
        order_id: orders[3].order_id,
        product_id: products[3].product_id,
        quantity: 1,
        unit_price: '49.99',
        total_price: '49.99'
      },
      {
        order_id: orders[3].order_id,
        product_id: products[4].product_id,
        quantity: 1,
        unit_price: '29.99',
        total_price: '29.99'
      },
      // Order 5 items
      {
        order_id: orders[4].order_id,
        product_id: products[4].product_id,
        quantity: 1,
        unit_price: '29.99',
        total_price: '29.99'
      },
      {
        order_id: orders[4].order_id,
        product_id: products[5].product_id,
        quantity: 1,
        unit_price: '24.99',
        total_price: '24.99'
      },
      // Order 6 items
      {
        order_id: orders[5].order_id,
        product_id: products[7].product_id,
        quantity: 1,
        unit_price: '19.99',
        total_price: '19.99'
      },
      {
        order_id: orders[5].order_id,
        product_id: products[5].product_id,
        quantity: 1,
        unit_price: '24.99',
        total_price: '24.99'
      },
      // Order 7 items
      {
        order_id: orders[6].order_id,
        product_id: products[6].product_id,
        quantity: 1,
        unit_price: '39.99',
        total_price: '39.99'
      },
      {
        order_id: orders[6].order_id,
        product_id: products[7].product_id,
        quantity: 1,
        unit_price: '19.99',
        total_price: '19.99'
      },
      // Order 8 items
      {
        order_id: orders[7].order_id,
        product_id: products[8].product_id,
        quantity: 1,
        unit_price: '15.99',
        total_price: '15.99'
      },
      {
        order_id: orders[7].order_id,
        product_id: products[7].product_id,
        quantity: 1,
        unit_price: '19.99',
        total_price: '19.99'
      },
      // Order 9 items
      {
        order_id: orders[8].order_id,
        product_id: products[8].product_id,
        quantity: 1,
        unit_price: '15.99',
        total_price: '15.99'
      },
      {
        order_id: orders[8].order_id,
        product_id: products[9].product_id,
        quantity: 1,
        unit_price: '18.99',
        total_price: '18.99'
      },
      // Order 10 items
      {
        order_id: orders[9].order_id,
        product_id: products[9].product_id,
        quantity: 1,
        unit_price: '18.99',
        total_price: '18.99'
      },
      {
        order_id: orders[9].order_id,
        product_id: products[7].product_id,
        quantity: 1,
        unit_price: '19.99',
        total_price: '19.99'
      }
    ]);

    // 6. Seed Payments (10 payments)
    console.log('💳 Seeding payments...');
    await db.insert(PaymentTable).values([
      {
        order_id: orders[0].order_id,
        user_id: users[0].user_id,
        amount: '1029.98',
        payment_method: 'credit_card',
        status: 'completed',
        transaction_id: 'TXN_001'
      },
      {
        order_id: orders[1].order_id,
        user_id: users[1].user_id,
        amount: '142.98',
        payment_method: 'paypal',
        status: 'completed',
        transaction_id: 'TXN_002'
      },
      {
        order_id: orders[2].order_id,
        user_id: users[2].user_id,
        amount: '62.98',
        payment_method: 'credit_card',
        status: 'pending',
        transaction_id: 'TXN_003'
      },
      {
        order_id: orders[3].order_id,
        user_id: users[3].user_id,
        amount: '79.98',
        payment_method: 'debit_card',
        status: 'completed',
        transaction_id: 'TXN_004'
      },
      {
        order_id: orders[4].order_id,
        user_id: users[4].user_id,
        amount: '54.98',
        payment_method: 'credit_card',
        status: 'completed',
        transaction_id: 'TXN_005'
      },
      {
        order_id: orders[5].order_id,
        user_id: users[5].user_id,
        amount: '44.98',
        payment_method: 'paypal',
        status: 'completed',
        transaction_id: 'TXN_006'
      },
      {
        order_id: orders[6].order_id,
        user_id: users[6].user_id,
        amount: '59.98',
        payment_method: 'credit_card',
        status: 'refunded',
        transaction_id: 'TXN_007'
      },
      {
        order_id: orders[7].order_id,
        user_id: users[7].user_id,
        amount: '35.98',
        payment_method: 'debit_card',
        status: 'completed',
        transaction_id: 'TXN_008'
      },
      {
        order_id: orders[8].order_id,
        user_id: users[8].user_id,
        amount: '34.98',
        payment_method: 'credit_card',
        status: 'completed',
        transaction_id: 'TXN_009'
      },
      {
        order_id: orders[9].order_id,
        user_id: users[9].user_id,
        amount: '38.98',
        payment_method: 'paypal',
        status: 'completed',
        transaction_id: 'TXN_010'
      }
    ]);

    console.log('✅ Database seeding completed successfully!');
    console.log('📊 Seeded:');
    console.log(`   - ${users.length} users`);
    console.log(`   - ${categories.length} categories`);
    console.log(`   - ${products.length} products`);
    console.log(`   - ${orders.length} orders`);
    console.log(`   - 20 order items`);
    console.log(`   - 10 payments`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

// Run the seed function
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('🎉 Seeding process finished');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Seeding failed:', error);
      process.exit(1);
    });
}

export { seedDatabase };