import { Router } from 'express';
import ProductManager from '../components/productManager.js';

const router = Router();

const productos = new ProductManager('./products.json');


router.get('/products', (req, res) => {
  res.json({productos});
  console.log(productos);
});

router.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = getProduct(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

router.post('/products', (req, res) => {
  const { name, price } = req.body;
  const product = createProduct(name, price);
  res.json(product);
});

router.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const product = updateProduct(id, name, price);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = deleteProduct(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});




export default router;