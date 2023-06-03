import React from 'react'
import { makeStyles } from "tss-react/mui";
import { Typography } from '@mui/material';

const Banner = () => {
  const { classes } = useStyles();

  return (
    <div>
     <div className={classes.banner}>
      <div>
       <img className={classes.image} src='https://i.imgur.com/a43UBhF.png' alt='banner' />
      </div>
     <div> 
       <Typography className={classes.text}>¡Bienvenido a nuestra tienda web!</Typography>
       <Typography className={classes.subtext}>Aqui encontraras las mejores ofertas en productos de alta calidad.</Typography>
      </div>
     </div>
    </div>
  )
}

const useStyles = makeStyles()((theme) => ({
    banner: {
       background: 'linear-gradient(45deg, #00D4F6 30%, #0049FF 70%)',
       height: '42vh',
       display: 'flex',
       justifyContent: 'space-evenly',
       [theme.breakpoints.down('sm')]: {
        display: 'block',
        height: '80vh',
        paddingLeft: '10px'
      },
      [theme.breakpoints.up('sm')]: {
        height: '40vh',
        paddingLeft: '10px'
      },
      [theme.breakpoints.up('md')]: {
          height: '60vh',
          paddingLeft: '10px'
      }
    },
    image: {
      height: '28vh',
      marginTop: '70px',
      [theme.breakpoints.down('sm')]: {
        height: '15vh'
      },
      [theme.breakpoints.up('sm')]: {
        height: '12vh',
        marginTop: '100px',
      },
      [theme.breakpoints.up('md')]: {
        height: '20vh',
        marginTop: '120px',
      },
    },
    text:{
        color: '#fff',
        fontSize: '35px',
        marginTop: '120px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginTop: '50px',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '22px',
            marginTop: '120px',
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            marginTop: '150px',
          },  
    },
    subtext: {
        color: '#fff',
        fontSize: '20px',
        marginTop: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginTop: '50px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '20px',
          }, 

    }
  }));


export default Banner