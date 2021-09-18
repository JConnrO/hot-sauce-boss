const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Cayenne Pepper Hot Sauce' },
    { name: 'Sriracha Hot Sauce' },
    { name: 'Chilli Lime Hot DSauce' },
    { name: 'Thai Sweet Chilli Hot Sauce' },
    { name: 'Gochugaru Hot Sauce' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Hoffs Wake Up Call Hot Sauce',
      description:
        'Hoffs most complex hot sauce is handcrafted with fresh chilis, gourmet spices',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 50
    },
    {
      name: 'Cholula Hot Sauce',
      description:
        'This bottle was made with the every-day-every-meal hot sauce user in mind. 12 ounces of the iconic Mexican sauce allows you to be generous with your servings',
      image: 'canned-coffee.jpg',
      category: categories[1]._id,
      price: 16.99,
      quantity: 50
    },
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
