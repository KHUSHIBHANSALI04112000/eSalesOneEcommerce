import mongoose from 'mongoose';
import {Product} from '../schemas/productSchema.js';
const uri = "mongodb+srv://khushibh:khushibh@e-commerce-khushi.win0a.mongodb.net/?retryWrites=true&w=majority&appName=E-Commerce-Khushi";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database.');
    (async function seedProducts() {
      try {
          const sampleProduct = 
            {
              title: 'Apple Watch SE',
              description: 'This watch is awesome and keeps track of many things',
              price: 339,
              inventory: 100,
              image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/se-case-unselect-gallery-1-202409_GEO_IN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=Rmt2NDRBcDRCNVhOcFJTSzZLRU92VDRaUXRUTWQzQjFEYzhtZ3BqNzAwSzlwSVJaRDNsaVBEZmZzODMrOUVuM3pvSEo2UzBKSm5BUmFETEIwa1Jzd1BXdlJRYjdSZWJHVUh4aFVDb0hhVVdXTTRhV1JoOXBCTDZTbTdwV2NQT3E',
              variants: ['black', 'beige', 'grey']
            };
          await Product.insertOne(sampleProduct);
          console.log('Seeded sample product.');
        
      } catch (err) {
        console.error('Error seeding products:', err);
      }
    })();
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
