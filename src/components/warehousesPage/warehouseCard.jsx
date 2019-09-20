import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import useStyles from './warehousePageStyles'


export default ({list, handleDeleteArea}) => {
    const classes = useStyles();

    if (list.length > 0) {
        const arrList = []

        for (let i = 0; i < list.length; i++) {

            arrList[i] = <Card className={classes.cardArea} key={list[i].type + i}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Type: <span> {list[i].type}</span>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Area (m<sup>2</sup>):<span> {list[i].area}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary" onClick={() => handleDeleteArea(i,list[i].area)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        }
        return arrList

    } else return null
}