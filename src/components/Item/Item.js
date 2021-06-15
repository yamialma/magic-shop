import React from 'react';
import { itemStyles } from './ItemStyles';
import Counter from '../Counter/Counter';
import { makeStyles , Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';


const useStyles = makeStyles ((theme) => itemStyles(theme));

export const Item = props => {
    const classes = useStyles();

    const {title, description, price, photo, stock} = props;
    return <div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={photo}
                />
                <CardContent>
                    <Typography component="h3" className={classes.titutlo}>{title}</Typography>
                    <Typography color="textPrimary" component="p">{description}</Typography>
                    <Typography className={classes.precio}>${price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <Counter cantidad={stock}/>
            </CardActions>
        </Card>
    </div>
}