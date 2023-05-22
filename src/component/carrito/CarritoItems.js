import React from "react"
import { makeStyles } from "tss-react/mui";
import CardMedia from '@mui/material/CardMedia';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, CardHeader, Typography } from '@mui/material';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import accounting from 'accounting';
import { removeFromCart } from "../../store/cartSlice"
import { useDispatch } from "react-redux"

export const CarritoItems = ({ id, name, price, image }) => {

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id, name, price, image }))
  }

  const { classes } = useStyles();
  
  return (
    <>
       <div className={classes.contenedor}>
        <div className={classes.imagen}>
          <CardMedia
            className={classes.heightImagen}
            image={image}
          />
          <div className={classes.nombre}>
          <Typography className={classes.name}>
            {name}
         </Typography>
          </div>  
        </div>
        <div className={classes.cantidad}>
        cant: <Button style={{ color: '#000' }}>
            <IndeterminateCheckBoxIcon style={{ marginRight: '5px' }}/> 1 <AddBoxIcon style={{ marginLeft: '5px' }}/>
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
            {accounting.formatMoney(price, '$')}
          </Typography>
           }  
         /> 
          <div className={classes.eliminar}>
            <DeleteIcon onClick={handleRemoveFromCart} style={{ cursor: 'pointer', fontSize: '20px' }}/>
          </div>
        </div>
    </div>
    </>
  )
}

const useStyles = makeStyles()((theme) => ({
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