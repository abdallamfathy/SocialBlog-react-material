import './App.css';
import PrimarySearchAppBar from './Components/Navbar'
import {Grid} from "@mui/material";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import Feed from "./Components/Feed";
import {makeStyles} from "@material-ui/core";
import Add from "./Components/Add";


const useStyles = makeStyles((theme) => ({
  item:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  }
}))
const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
    <PrimarySearchAppBar className={classes}/>
      <Grid container>
        <Grid item sm={2} xs={2}><Leftbar/></Grid>
        <Grid item sm={7} xs={10}><Feed/></Grid>
        <Grid item sm={3} className={classes.item}><Rightbar/></Grid>
      </Grid>
      <Add/>
    </div>
  )
}

export default App;
