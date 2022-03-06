import './App.css';
import {Box, makeStyles} from '@material-ui/core';

//components
import NavBar from './components/navbar/NavBar';
import SubBar from './components/subbar/SubBar';
import Articles from './components/articles/Articles';

const useStyles=makeStyles(theme=>({
   container:{
      marginTop:110,
      width:'59%',
      margin:'0 auto',
      [theme.breakpoints.down('md')]:{
         width:'75%'
      },
      [theme.breakpoints.down('sm')]:{
         width:'85%'
      }
   }
}))

function App() {

   const classes=useStyles()

  return (
     <Box>
        <NavBar/>
        <Box className={classes.container}>
          <SubBar/>
          <Articles/>
        </Box>
        
     </Box>
  );
}

export default App;
