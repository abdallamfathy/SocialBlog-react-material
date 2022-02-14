import React from 'react';
import {Button, CardActionArea, CardActions, CardContent} from "@mui/material";
import {Card, CardMedia, makeStyles} from "@material-ui/core";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme)=>({
    card:{
      marginBottom:theme.spacing(40),
    },
    media:{
        height:250,
        [theme.breakpoints.down("sm")]:{
            height:150,
        }
    },

}));
function Post () {
    const classes = useStyles();
    return(
        <Card className={classes.card}><CardActionArea style={{ marginBottom:20}}>
            <CardMedia 
                className={classes.media}
                image="https://images.pexels.com/photos/10874317/pexels-photo-10874317.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="My Post"/>
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">I’ve lived in two different Sprinter Vans and spent a good chunk of
                    the last 4 years traveling all across the US in my van. I created a free online course –
                    The Van Life Roadmap – which you’ll find below to teach you how to do van life. My goal these
                    van life blog posts is to help you end up with the right van the
                    first time around and to teach you the skills to road trip in your van and live on the road.
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small" color="primary">SHARE</Button>
                <Button size="small" color="primary">LEARN MORE</Button>
            </CardActions>
        </CardActionArea>

            <CardActionArea style={{ marginBottom:20}}>
            <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/10805648/pexels-photo-10805648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="My Post"/>
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">That’s why we have put together a list of the most useful
                    gifts for vanlifers. All the ideas below are under $100 and are all things that we too, personally use in our van.
                    If you’re looking for more ideas, we also have another gift list.
                    All these gifts have been tried and tested by us. In most cases, they are items that we use every single day in the van
                    . Many of our vanlife friends also love these items and we always recommend them to others when asked what our
                    vanlife must-have items are.  Our aim with these products is for them to all
                    be high quality and able to stand the test of time of life on the road.
                </Typography>
            </CardContent>
                <CardActions >
                <Button size="small" color="primary">SHARE</Button>
                <Button size="small" color="primary">LEARN MORE</Button>
            </CardActions>
            </CardActionArea>

                <CardActionArea style={{ marginBottom:20}}>
                    <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/8647071/pexels-photo-8647071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="My Post"/>
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">Other festival goers hopped in one of Jug Mountain’s
                    4×4 shuttles to catch a ride up to the sparkling reservoir on the property.
                    Hydrus Board Tech brought a fleet of their Boise-made SUP boards and offered free
                    paddleboarding demos to anyone wanting to get out on the water.
                    All weekend the sun was out and the weather was perfect, yet hot,
                    so this was a prime location for many guests looking to cool off, try something new, or enjoy a
                    refreshing dip in the water. However, you didn’t have to go to the reservoir to escape the heat.
                    We also had a beautiful creek that
                    meandered right behind the campsites to dip your toes in or take a chilly plunge.
                </Typography>
            </CardContent>
                    <CardActions >
                        <Button size="small" color="primary">SHARE</Button>
                        <Button size="small" color="primary">LEARN MORE</Button>
                    </CardActions>
                </CardActionArea>

            <CardActionArea style={{ marginTop:20}}>
            <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/10581443/pexels-photo-10581443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="My Post"/>
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">It isn’t every day that people from all walks of life, backgrounds,
                    experiences, and ages come together for a three-night campout in the mountains of Idaho. However,
                    that’s exactly what went down at 2019’s inaugural Open Roads Fest at Jug Mountain Ranch in McCall,
                    Idaho: a van life festival that we organized with the adventure enthusiast in mind. With the help
                    of our amazing volunteers, the folks at Jug Mountain Ranch,
                    and so many more, we threw what turned out to be an epic get together in celebration of life on the road.
                </Typography>
            </CardContent>
                <CardActions >
                    <Button size="small" color="primary">SHARE</Button>
                    <Button size="small" color="primary">LEARN MORE</Button>
                </CardActions>
        </CardActionArea>

        </Card>
    )
}


export default Post;