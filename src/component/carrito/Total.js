import React from 'react'
import { Button, Typography } from '@mui/material'
import { makeStyles } from "tss-react/mui";


const Total = () => {
  const { classes } = useStyles();

  return (
    <div style={{ marginTop: '30px' }}>
       <Typography style={{ fontSize: '50px' }}>
          Total: $1000
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
        marginTop: '20px' 
     }
  }));

export default Total