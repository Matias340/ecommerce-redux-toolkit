import React from "react"
import { CarritoItems } from "./CarritoItems"
import { useSelector } from "react-redux"
import { makeStyles } from "tss-react/mui";
import { Button, CardActions, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CarritoPage = () => {
  const { classes } = useStyles();

  const cartItems = useSelector((state) => state.cart.itemsList)

  return (
    <>
       <div>
            <CardActions style={{ backgroundColor: '#E2E2E2', paddingLeft: '40px' }}>
               <HomeIcon style={{ marginTop: '60px', color: '#838383', fontSize: '18px' }}/> 
               <ArrowForwardIosIcon style={{ marginTop: '60px', fontSize: '12px', color: '#838383' }}/>
               <Typography style={{ marginTop: '60px', marginLeft: '10px', fontSize: '12px', color: '#838383' }}>Carrito</Typography>
            </CardActions> 
            </div>
            <a href='/' style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '20px', marginTop: '20px', textDecoration: 'none', width: '180px' }}>
            <ArrowBackIcon style={{ color:'#0D305A', fontSize: '25px', cursor: 'pointer' }} />    
            <Typography className={classes.button}>
               Volver a Compra
            </Typography>
            </a>  
            <div className={classes.tarjetaYtotal}>
              <div className={classes.formRowCard}>
               <Typography align='left' className={classes.titulo}>
                MI CARRITO
               </Typography> 
        {cartItems.map((item) => (
          <CarritoItems id={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />
        ))}
        </div>
                <Button variant="contained" className={classes.buttonAbajo}>
                   Vaciar Carrito
                </Button>  
                <div>
                <Typography align='center' gutterBottom variant='h4'>
                </Typography>
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
    [theme.breakpoints.down('sm')]:{
        display: 'block'
    },
    [theme.breakpoints.up('sm')]:{
      display: 'block'
    },
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
      backgroundColor: '#0D305A', 
      color: '#fff',
      [theme.breakpoints.down('sm')]:{
          marginRight:'10px',
          marginBottom: '30px'
      },
      [theme.breakpoints.up('sm')]:{
          marginRight:'10px',
          marginBottom: '10px'
      },
      [theme.breakpoints.up('md')]:{
          marginRight: '750px',
      }
  },
  titulo:{
      marginTop: '30px', 
      marginLeft: '100px', 
      fontWeight: 'bold', 
      fontSize: '25px',
      [theme.breakpoints.up('md')]:{
          marginLeft: '70px',
          marginBottom: '30px'
      }
  }
}));