import React from "react"
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { makeStyles } from "tss-react/mui";
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';
import { IconButton } from '@mui/material';
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice"

export const ProductCart = ({ key, id, name, price, image }) => {

  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image }))
  }

  const { classes } = useStyles();

  return (
    <>
    
    <div className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        
      />
      
      <div>
      <Typography style={{ color: '#000', textAlign: 'center', fontSize: '18px', marginBottom: '10px' }}>{name}</Typography>
      <div style={{ justifyContent: 'space-around', display: 'flex' }}>
      <CardActions disableSpacing >
        <IconButton onClick={handleAddToCart}>
           <AddShoppingCart fontSize='large' style={{ color: '#0D305A', cursor: 'pointer' }} />
        </IconButton>
      </CardActions>
      
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
    </div>
    </>
  )
}

const useStyles = makeStyles()((theme) => ({
  root: {
    WebkitBoxShadow : '8px 5px 16px -1px rgba(0,0,0,0.76)',
    boxShadow: '8px 5px 16px -1px rgba(0,0,0,0.76)',
      maxHeight: 250,
      maxWidth: 180,
      backgroundColor: '#fff',
      fontSize: '15px',
      color: 'white',
      marginTop: '30px',
      border: '1px solid #fff',
      borderRadius: '8px',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
      marginBottom: '20px'
     
  },
  action:{
     fontSize: '20px',
     fontWeight: 'bold',
     color: '#0D305A'
  },
  media: {
      marginLeft: '10px',
      marginTop: '10px',
      marginRight: '10px',
      height: '30px',
      paddingTop: '70%',
  },
}));