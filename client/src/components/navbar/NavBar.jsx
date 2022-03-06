import { AppBar, Box, Toolbar, makeStyles} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import React from 'react';

const useStyles=makeStyles({
    component:{
        background:'#fff',
        height:70
    },
    logo:{
        height:55,
        margin:'auto',
        paddingRight:70
    },
    menu:{
        color:'#000'
    }
})

function NavBar() {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    const classes=useStyles()

  return (
      <Box>
          <AppBar className={classes.component}>
              <Toolbar>
                <Menu className={classes.menu}/>
                <img className={classes.logo} src={url} alt='logo'/>
              </Toolbar>
          </AppBar>
      </Box>
  );
}

export default NavBar;
