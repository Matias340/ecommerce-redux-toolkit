import React from "react"
import products from "../../data/data/data"
import Grid from '@mui/material/Grid';
import { makeStyles } from "tss-react/mui";
import { Typography } from '@mui/material';
import { ProductCart } from "./ProductCart";
import Banner from '../banner/Banner';

export const Product = () => {
  const { classes } = useStyles();

  return (
    <>
    <Banner />
    <div className={classes.root}>
      <div style={{ marginTop:'100px', marginRight: '1120px' }}>
        <Typography style={{ color: '#0D305A', fontWeight: 'bold', fontSize: '30px' }}>Zapatillas</Typography>
      </div>  
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
          {products.map((item) => (
            <ProductCart key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
      </Grid>
    </div>
    </>
  )
}

const useStyles = makeStyles()((theme) => ({
  root:{
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: '#F3F3F3',
  }
}));