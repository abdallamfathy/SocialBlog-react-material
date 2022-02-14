import React from 'react';
import {AvatarGroup, Container, Divider} from "@mui/material";
import {Avatar, ImageList, ImageListItem, makeStyles,Link} from "@material-ui/core";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme)=>({

    container:{
        paddingTop:theme.spacing(5),
        position:"sticky",
        top:0,

    },
    title:{
        color:"#555",
    },
    link:{
      marginRight:theme.spacing(2),
        color:"#555",
        fontSize:16,
        marginBottom:theme.spacing(4)
    },

}));
function Rightbar () {
    const classes = useStyles();
    return( <Container  className={classes.container}>
        <Typography className={classes.title} gutterBottom style={{fontWeight:500,fontSize:18}}>Online Friends</Typography>
        <AvatarGroup max={6} style={{marginBottom:20}}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/6.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom style={{fontWeight:500,fontSize:18}}>Gallery</Typography>
        <ImageList variant="masonry" cols={3} gap={8} rowHeight={100} style={{marginBottom:20}}>

                <ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1525097487452-6278ff080c31?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem><ImageListItem >
                    <img
                        src="https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=248&fit=crop&auto=format"
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>

        </ImageList>
        <Typography className={classes.title} gutterBottom style={{fontWeight:500,fontSize:18}}>Categories</Typography>
        <Link href="#" className={classes.link} variant="body2">Sport</Link>
        <Link href="#" className={classes.link} variant="body2">Food</Link>
        <Link href="#" className={classes.link} variant="body2">Music</Link>
        <Divider flexItem style={{marginBottom:5,border:"none"}}/>
        <Link href="#" className={classes.link} variant="body2">Movies</Link>
        <Link href="#" className={classes.link} variant="body2">Science</Link>
        <Link href="#" className={classes.link} variant="body2">Life</Link>
    </Container>)
}


export default Rightbar;