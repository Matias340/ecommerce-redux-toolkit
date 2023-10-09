import React from 'react'
import { Button, Typography } from '@mui/material'
import { makeStyles } from "tss-react/mui";
import { useSelector } from "react-redux";


const Total = () => {
  const { classes } = useStyles();
  const cart = useSelector((state) => state.cart); 

  return (
    <div style={{ marginTop: '30px' }}>

       <Typography className={classes.precio}>
          Total: ${cart.cartTotalAmount}
       </Typography>
       <Button variant="contained" className={classes.button}>
           COMPRAR
       </Button>
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
     button:{
        backgroundColor: '#0D305A',
        fontSize: '25px',
        marginLeft: '50px',
        marginBottom: '20px',
        marginTop: '20px',
        [theme.breakpoints.down('sm')]:{
         fontSize: '30px',
         marginLeft: '40px',
       }, 
     },
     precio: {
      [theme.breakpoints.down('sm')]:{
         fontSize: '30px',
         textAlign: 'center'
       },
       [theme.breakpoints.up('sm')]:{
         fontSize: '40px',
         textAlign: 'center'
     },
     [theme.breakpoints.up('md')]:{
      fontSize: '50px',
      textAlign: 'center'
  },
     }
  }));

export default Total