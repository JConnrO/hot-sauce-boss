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
    {
      name: 'Valentina Extra Hot Sauce',
      category: categories[2]._id,
      description:
        'Mexicos number one selling hot sauce. Valentina Extra Hot Sauce is a red, pourable hot sauce from Mexico made from puya chilis and is thicker and less acidic than Tabasco with a distinct chili flavour. ',
      image: 'toilet-paper.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Old World Christmas Hot Sauce',
      category: categories[3]._id,
      description:
        'Old Chrismasy Chrismacy',
      image: 'soap.jpg',
      price: 32.00,
      quantity: 50
    },
    {
      name: 'Tuong Ot Hot Sauce ',
      category: categories[1]._id,
      description:
        'Sriracha Hot Chili Sauce from Huy Fong. Made from sun ripened chilis',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    
    {
      name: 'Franks Redhot Sauce',
      category: categories[0]._id,
      description:
        'Franks redhot chilli hotsauce queen naija cayenne pepper',
      image: 'camera.jpg',
      price: 29.99,
      quantity: 30
    },
    {
      name: 'Tapatio Hot Sauce',
      category: categories[4]._id,
      description:
        'This is an old favourite. Tapatios major asset is the absence of vinegar in the recipe which promises genuine pepper flavours. Have a try! learn more',
      image: 'tablet.jpg',
      price: 79.99,
      quantity: 50
    },
    {
      name: 'Craft Hot Sauce Inferno Farms',
      category: categories[3]._id,
      description:
        'About the Sauce: Volcanus, made with the world’s hottest pepper, Smokin’ Ed’s Carolina Reaper, this sauce packs a punch for the uninitiated. Your lips ',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Louisiana Hot Sauce',
      category: categories[4]._id,
      description: 'a hot sauce with a 90-year history of great taste and quality. using time-honored techniques of Louisiana style cooking, this hot sauce is produced ...',
      image: 'spinning-top.jpg',
      price: 8.99,
      quantity: 10
    },
    {
      name: 'Jolokia Ghost Mental Hot Sauce',
      category: categories[4]._id,
      description:
        'This Aubrey D. Rebel hot sauce is made with the GHOST pepper (a.k.a. JOLOKIA/NAGA) and it is the hottest natural and unmodified pepper in the world We ...',
      image: 'plastic-horses.jpg',
      price: 17.99,
      quantity: 1000
    } 
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
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

