import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { makeStyles } from "tss-react/mui";
import { Button, CardActions, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardHeader } from '@mui/material';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import accounting from 'accounting';
import {
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  increaseCart
} from "../../store/cartSlice";
import { useDispatch } from "react-redux"
import Total from "./Total";

export const CarritoPage = () => {
  const { classes } = useStyles();
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseCart = (product) => {
    dispatch(increaseCart(product));
  };
  
  return (
    <>
       <div>
            <CardActions style={{ backgroundColor: '#E2E2E2', paddingLeft: '40px' }}>
               <HomeIcon style={{ marginTop: '60px', color: '#838383', fontSize: '18px' }}/> 
               <ArrowForwardIosIcon style={{ marginTop: '60px', fontSize: '12px', color: '#838383' }}/>
               <Typography style={{ marginTop: '60px', marginLeft: '10px', fontSize: '12px', color: '#838383' }}>Carrito</Typography>
            </CardActions> 
            </div>
            
            <div className={classes.tarjetaYtotal}>
            <a href='/' style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '20px', marginTop: '20px', textDecoration: 'none', width: '180px' }}>
            <ArrowBackIcon style={{ color:'#0D305A', fontSize: '25px', cursor: 'pointer' }} />    
            <Typography className={classes.button}>
               Volver a Compra
            </Typography>
            </a>  
              <div className={classes.formRowCard}>
               <Typography align='left' className={classes.titulo}>
                MI CARRITO
               </Typography> 
               
        {cart.cartItems &&
              cart.cartItems.map((item) => (
          <div className={classes.contenedor}>
          <div className={classes.imagen}>
            <CardMedia
              className={classes.heightImagen}
              image={item.image}
            />
            <div className={classes.nombre}>
            <Typography className={classes.name}>
              {item.name}
           </Typography>
            </div>  
          </div>
          <div className={classes.cantidad}>
            cant: 
          <Button style={{ color: '#000' }}>
              <IndeterminateCheckBoxIcon onClick={() => handleDecreaseCart(item)} style={{ marginRight: '5px' }}/>
                  {item.cartQuantity}
              <AddBoxIcon onClick={() => handleIncreaseCart(item)} style={{ marginLeft: '5px' }}/>
            </Button>
          </div>
  
          <div className={classes.precio}>
          <CardHeader
             action={
            <Typography
              className={classes.action}
              variant='h5'
              color='textSecondary'
            >
              {accounting.formatMoney(item.price * item.cartQuantity, '$')}
            </Typography>
             }  
           /> 
            <div className={classes.eliminar}>
              <DeleteIcon onClick={()=>handleRemoveFromCart(item)} style={{ cursor: 'pointer', fontSize: '20px' }}/>
            </div>
          </div>
      </div>
        ))}
        </div>
             <div className={classes.total}>
               <Button onClick={() => handleClearCart()} variant="text" className={classes.buttonAbajo}>
                   Vaciar Carrito
                </Button>     
               <div style={{ paddingRight: '100px' }}>
                 <Total />
               </div> 
            </div>   
      </div>       
    </>
  )
}

const useStyles = makeStyles()((theme) => ({
  root:{
      flexGrow: 1,
  },
  tarjetaYtotal:{
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]:{
      display: 'block'
  },
  
  },
  button:{
      color: '#0D305A',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer'
  },
  buttonAbajo:{
      color: '#0D305A',
      marginLeft: '100px',
      fontWeight: 'bold',
      fontSize: '20px'
  },
  titulo:{
      marginTop: '30px', 
      fontWeight: 'bold', 
      fontSize: '25px',
      [theme.breakpoints.up('md')]:{
          marginLeft: '100px',
          marginBottom: '30px'
      }
  },
  total:{
    display: 'flex',
    justifyContent: 'space-between'

  },
  contenedor: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '100px',
    marginRight: '100px',
    marginBottom: '20px',
    borderBottom: '1px solid #000',
  },

  imagen:{
    display: 'flex',
  },

  nombre: {
    marginLeft: '20px',
  },

  eliminar: {
    marginTop: '50px',
    paddingLeft: '50px'
  },
  heightImagen: {
    width: 125, 
   height: 128,
  },

  name: {
    fontSize: '20px',
  },

  action: {
    fontSize: '18px',
    color: '#000',
  },
}));