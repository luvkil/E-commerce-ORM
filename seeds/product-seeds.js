const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 15.89,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 70.00,
    stock: 30,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 23.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 14.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 30.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
