import logo from './logo.svg';
import './App.css';
import { AppBar, Paper, Toolbar, Typography } from '@mui/material';
import { Outlet,Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { deepOrange,deepPurple} from '@mui/material/colors';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton,Avatar} from '@mui/material';
import pic from './images/safety.png';
import ErrorBoundary from './errorboundary';




const theme=createTheme({
  palette:{
      primary:{
      main:deepOrange[500]
              },
  text:{
      primary:deepPurple[50]
       }
          }
                      })
function App() {
  return (
    < >
     <ThemeProvider theme={theme}>

      <AppBar position='fixed'>
        <Toolbar>
       
                  <Avatar alt="image" src={pic} sx={{position:"relative",left:800}}/>
                   <Typography >SafetyManagementSystem</Typography>  
                {/* <div style={{postion:"relative",left:-10}}> */}
                <Link to="/home/view"><Button variant='conatined'>View Entries</Button></Link>
                <Link to="/home/add"><Button variant='conatined'>Add Entries</Button></Link>
                <Link to="/home/viewall"><Button variant='conatined'>View All Entries</Button></Link>
                <Link to="/home/update"><Button variant='conatined'>Update Delete</Button></Link>
                {/* </div> */}
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    <div style={{position:'relative',top:150}}>
      <Paper elevation={15} style={{height:300,width:200}}>
        <ErrorBoundary>
        <Outlet/>
        </ErrorBoundary>
      </Paper>

    </div>
    </>
  );
}

export default App;
