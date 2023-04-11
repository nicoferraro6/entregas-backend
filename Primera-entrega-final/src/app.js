import express from 'express';
import productsRoute from './src/routes/productsRoute.js';
import cartRoute from './src/routes/cartRoute.js';


const PORT = 8080;
const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(port, () => {
  console.log('Servidor funcionando en el puerto ' + PORT);
});

app.use("/api/products", productsRoute);
app.use("/api/carts", cartRoute);