import React from 'react'
import { Container, Divider, Typography } from '@mui/material'
import { makeStyles } from "tss-react/mui";

const Footer = () => {
    const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Divider /> 
      <Container>
        <Typography style={{ paddingTop: '30px', color: '#fff' }} variant="h6" align="center" gutterBottom>
          Todos los derechos reservados
        </Typography>   
      </Container>
    </footer>
  )
}

const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: '#0D305A',
        marginTop: '300px',
        height: '250px'
      },
  }));

export default Footer