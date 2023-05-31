import nike from '../../imagenes/nike.jpeg';
import nikeBlue from '../../imagenes/nikeBlue.jpg';
import adidas from '../../imagenes/adidas.jpg';
import adidasBlancas from '../../imagenes/adidasBlancas.jpg';

const products = [
  {
    id: 1,
    name: 'zapatilla Nike', 
    price: 50,
    image: nike,
    quantity: 1,
  },
  {
    id: 2,
    name: 'zapatilla Nike blue', 
    price: 55,
    image: nikeBlue,
    quantity: 1,
  },
  {
    id: 3,
    name: 'zapatilla adidas', 
    price: 60,
    image: adidas,
    quantity: 1,
  },
  {
    id: 4,
    name: 'zapatilla adidas', 
    price: 70,
    image: adidasBlancas,
    quantity: 1,
  },
];

export default products;