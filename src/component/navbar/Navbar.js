import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "tss-react/mui";
import {ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from "react-redux";


const Navbar = () => {
  const { classes } = useStyles();
  const cart = useSelector((state) => state.cart); 

  return (
 <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
        <a href='/' className={classes.inicio}><StoreIcon fontSize='large' style={{ cursor: 'pointer' }}/></a>
          <div className={classes.grow} />
          <div className={classes.button}>
          <IconButton aria-label='show cart items' href='/carrito' color='inherit'>
             <Badge badgeContent={cart.cartItems.length} color='secondary'>
               <ShoppingCart fontSize='10px' />
             </Badge>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      </div>
  )
}

const useStyles = makeStyles()((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
       boxShadow: 'none',
       backgroundColor: '#0D305A',
      
    },
    grow:{
      flexGrow: 30,
    },
    button: {
      marginLeft: theme.spacing(4),
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(1),
      }
    },
    account: {
      marginTop: '5px'
    },
    putInit: {
      marginRight: '50px',
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]:{
         marginRight: '20px'
      } 
   },
   input: {
     color: 'white',
     marginLeft: '20px',
     [theme.breakpoints.down('sm')]: {
      paddingRight: '0px'
    }
   },
   inicio: {
     color: '#fff',
     [theme.breakpoints.down('sm')]: {
        marginRight: '10px'
     },
     [theme.breakpoints.up('sm')]: {
      marginRight: '120px'
     },
     [theme.breakpoints.up('md')]: {
      marginRight: '230px'
     }
   },
   click: {
    color: 'white', 
    marginRight: '10px', 
    fontSize: '10px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px'
    }
   }
  }));

export default Navbar
