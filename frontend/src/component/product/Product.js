/*import React from "react"
import products from "../../data/data/data"
import auriProducts from "../../data/data/auri-data"
import pcProducts from "../../data/data/pc-data"
import Grid from '@mui/material/Grid';
import { makeStyles } from "tss-react/mui";
import { Typography } from '@mui/material';
import { ProductCart } from "./ProductCart";
import { AuriCart } from "./AuriCart";
import { PcCart } from "./PcCart";
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';

export const Product = () => {
  const { classes } = useStyles();

  return (
    <>
    <Banner />
    <div className={classes.root}>
    <div style={{ marginTop:'100px', marginRight: '1120px' }}>
        <Typography style={{ color: '#0D305A', fontWeight: 'bold', fontSize: '30px' }}>
          Auriculares
        </Typography>
      </div>  
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
          {auriProducts.map((item) => (
            <AuriCart key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
      </Grid>
      <div style={{ marginTop:'100px', marginRight: '1120px' }}>
        <Typography style={{ color: '#0D305A', fontWeight: 'bold', fontSize: '30px' }}>
          Notebooks
        </Typography>
      </div>  
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
          {pcProducts.map((item) => (
            <PcCart key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
      </Grid>
      <div style={{ marginTop:'100px', marginRight: '1120px' }}>
        <Typography style={{ color: '#0D305A', fontWeight: 'bold', fontSize: '30px' }}>
          Zapatillas
        </Typography>
      </div>  
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} container spacing={2}>
          {products.map((item) => (
            <ProductCart key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
          ))}
      </Grid>
    </div>
    <Footer />
    </>
  )
}

const useStyles = makeStyles()((theme) => ({
  root:{
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: '#F3F3F3',
  }
}));*/
