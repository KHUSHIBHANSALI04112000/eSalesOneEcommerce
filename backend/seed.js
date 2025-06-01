// seed.js
import mongoose from 'mongoose';
import Product from './schemas/productSchema.js' 

async function seedData() {
  try {
    const count = await Product.countDocuments({});
    if (count === 0) {
      const sampleProducts = [
        {
          title: 'Awesome Widget',
          description: 'This widget is awesome and does many things efficiently.',
          price: 59.99,
          image: 'https://via.placeholder.com/300.png?text=Awesome+Widget',
          variants: ['Red', 'Blue', 'Green']
        },
        {
          title: 'Incredible Gizmo',
          description: 'This gizmo offers exceptional performance.',
          price: 79.99,
          image: 'https://via.placeholder.com/300.png?text=Incredible+Gizmo',
          variants: ['Small', 'Medium', 'Large']
        }
      ];
      await Product.insertMany(sampleProducts);
      console.log('Seeded sample products.');
    } else {
      console.log('Products already seeded.');
    }
  } catch (err) {
    console.error('Error seeding products:', err);
  } finally {
    mongoose.disconnect();
  }
}
