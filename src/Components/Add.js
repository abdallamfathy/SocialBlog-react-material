import React, {useState} from 'react';
import {
    Button,
    Fab,
    FormControl,
    FormControlLabel,
    FormLabel,
    makeStyles,
    Modal,
    Radio,
    RadioGroup, Snackbar,
    Tooltip
} from "@material-ui/core";
import {Add as AddIcon} from "@mui/icons-material";
import { Container, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MuiAlert from '@mui/material/Alert';


const useStyles = makeStyles((theme)=>({

    fab:{
        position:"fixed",
        right:20,
        bottom:20,
    },
    container:{
        width:"50px",
        height:550,
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:"auto",
        backgroundColor:"white",
        [theme.breakpoints.down("sm")]:{
            width:"100vw",
            height:"100vh",
        }
    },
    form:{
        padding:theme.spacing(2),
    },
    item:{
        marginBottom:theme.spacing(3),
    },

}));


function Alert(props) {
    return <MuiAlert elevation={6}  variant="filled" {...props} />;
}

function Add () {

        const classes = useStyles();
        const [open, setOpen] = useState(false);
        const [openAlert, setAlert] = React.useState(false);
         const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };
        return (
            <>
                <Tooltip title="add" aria-label="add" onClick={() => setOpen(true)}>
                    <Fab color="primary" className={classes.fab}>
                        <AddIcon/>
                    </Fab>
                </Tooltip>
                <Modal open={open}>
                    <Container className={classes.container}>
                        <form className={classes.form} autoComplete="off">
                            <div className={classes.item}>
                                <TextField id="standard-basic" size="small" label="title" style={{width: "100%"}}/>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    maxRows={4}
                                    defaultValue="Tell your story.."
                                    variant="outlined"
                                    style={{width: "100%"}}
                                />
                            </div>
                            <div className={classes.item}>
                                <TextField select label="visibilty" value="Public">
                                    <MenuItem value="Public">Public</MenuItem>
                                    <MenuItem value="Private">Private</MenuItem>
                                    <MenuItem value="Unlisted">Unlisted</MenuItem>
                                </TextField>
                            </div>
                            <div className={classes.item}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Who can comment?</FormLabel>
                                    <RadioGroup>
                                        <FormControlLabel value="Everybody" control={<Radio size="small"/>}
                                                          label="Everybody"/>
                                        <FormControlLabel value="My friends" control={<Radio size="small"/>}
                                                          label="My friends"/>
                                        <FormControlLabel value="Nobody" control={<Radio size="small"/>}
                                                          label="Nobody"/>
                                        <FormControlLabel disabled value="Custom" control={<Radio size="small"/>}
                                                          label="Custom (PREMIUM)"/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className={classes.item}>
                                <Button variant="outlined" color="primary" style={{marginRight: 20}}
                                onClick={()=>setAlert(true)}>Create</Button>
                                <Button variant="outlined" color="secondry"
                                        onClick={() => setOpen(false)}>Cancel</Button>
                            </div>
                        </form>
                    </Container>
                </Modal>
                <Snackbar open={openAlert}
                          autoHideDuration={4000}
                          onClose={handleClose}
                          anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                          }}
                >
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        This is a success message!
                    </Alert>
                </Snackbar>
            </>
        )
    }


export default Add;