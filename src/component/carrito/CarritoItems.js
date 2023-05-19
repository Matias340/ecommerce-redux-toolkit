import React from "react"
import { makeStyles } from "tss-react/mui";
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, CardHeader, Typography } from '@mui/material';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import accounting from 'accounting';

export const CarritoItems = ({ id, name, price, image }) => {
  const { classes } = useStyles();
  
  return (
    <>
      <div className={classes.tarjeta}>
      <div>
     <CardMedia
        className={classes.imagen}
        image={image}
      />
      </div>
      
      <div> 
      <div className={classes.botones}>
       <div>
      <Typography className={classes.name}>
            {name}
          </Typography>
          </div> 
          <div>   
          <DeleteIcon style={{ cursor: 'pointer', fontSize: '20px', paddingTop: '8px' }}/>
          </div> 
          </div>  
          <Typography className={classes.cantidad} variant="subtitle1" color="text.secondary" component="div">
            cant: <Button style={{ color: '#000' }}><IndeterminateCheckBoxIcon style={{ marginRight: '5px' }}/> 1 <AddBoxIcon style={{ marginLeft: '5px' }}/></Button>
          </Typography>
          <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price, '$')}
          </Typography>
      }
      /> 
      </div>   
    </div>  
    </>
  )
}

const useStyles = makeStyles()((theme) => ({
  action: {
    paddingLeft: '520px',
    paddingTop: '24px',
    fontSize: '18px',
    color: '#000',
    [theme.breakpoints.down('sm')]:{
     paddingLeft: '80px',
     paddingTop: '0px',
   },
   [theme.breakpoints.up('md')]:{
     paddingLeft: '5px',
     paddingTop: '24px',
   },
  },
  imagen: {
   width: 125, 
   height: 128,
   [theme.breakpoints.down('sm')]:{
     width: 120, 
     height: 108,
   },
  },
  catidad:{
   
   [theme.breakpoints.down('sm')]:{
     paddingRight: '10px'
   },
   [theme.breakpoints.up('md')]:{
     
    
   },
  },
  tarjeta: {
   display: 'flex',  
   paddingLeft: '20px', 
   paddingRight: '20px', 
   paddingTop: '10px', 
   marginBottom: '40px', 
   marginLeft: '100px',
   borderBottom: '1px solid #000', 
   
  
   [theme.breakpoints.down('sm')]:{
     width: 300,
     marginLeft: '10px',
     paddingLeft: '10px', 
   },
   [theme.breakpoints.up('sm')]:{
     width: 705, 
     marginLeft: '10px',
   },
   [theme.breakpoints.up('md')]:{
     width: 900,
     marginLeft: '50px',
     paddingLeft: '10px', 
     marginBottom: '20px', 
   }
  
  },
  name: {
   fontSize: '20px', 
   paddingRight: '400px',
   [theme.breakpoints.down('sm')]:{
     paddingRight: '30px',
     paddingLeft: '5px'
   },
   [theme.breakpoints.up('md')]:{
     paddingRight: '590px',
     paddingLeft: '10px',
     paddingTop: '0px',
   },
  },
  botones: {
   display: 'flex', 
   justifyContent: 'space-around',
  }
}));