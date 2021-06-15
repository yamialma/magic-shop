import React, {useState, useEffect} from 'react';
import { Item } from '../Item/Item';
import { itemListStyles } from './ItemListStyles';
import { makeStyles, Grid, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles ((theme) => itemListStyles (theme));

const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve (
        [
            {
                title: 'Granola con Chocolate 500g',
                description: 'Beepure',
                idProduct: 14,
                price: 750,
                photo:"/img/miel-cremosa-beepure.jpg",
                alt:"Granola en frasco 500g Beepure",
                stock: 15
            },
            {
                title: 'Miel Cremosa 900g',
                description: 'Beepure',
                idProduct: 15,
                price: 950,
                photo:'https://lightroom.adobe.com/shares/18034450f6f444a9b49a6bb6ec0d7581/albums/366dbc3f96c0485daafb0903843ae69b/assets/e8dd71aa5e9e435ab5a9ae42468131a4',
                alt:"Miel Cremosa en frasco 900g Beepure",
                stock: 20
            },
            {
                title: 'Dulce Artesanal Frambuesa 450g',
                description: 'Beepure',
                idProduct: 16,
                price: 450,
                photo:'https://lightroom.adobe.com/shares/18034450f6f444a9b49a6bb6ec0d7581/albums/366dbc3f96c0485daafb0903843ae69b/assets/d64aa3e540c3486e996ac56e872068a6',
                alt:"Dulce Artesanal sabor Frambuesa en frasco de 450g Beepure",
                stock: 10
            },
            {
                title: 'Mantequilla de maní 400g',
                description: 'Beepure',
                idProduct: 17,
                price: 450,
                photo:'https://lightroom.adobe.com/shares/18034450f6f444a9b49a6bb6ec0d7581/albums/366dbc3f96c0485daafb0903843ae69b/assets/e8dd71aa5e9e435ab5a9ae42468131a4/metadata',
                alt:"Mantequilla de maní en frasco de 400g Beepure",
                stock: 15
            },
        ]
    ), 2000)
})

export const ItemList = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const ejecutarPromise = () => {
        myPromise.then(dataProduct => {
            setData(dataProduct)
        })
    }

    useEffect(() => {
        ejecutarPromise()
    }, []);

    return <>
        {
            data.length === 0 ? (<div className={classes.root}><CircularProgress disableShrink/></div>) : (<Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        {data.map((element, i) => <Item key={element.title}
                            title={element.title}
                            description={element.description}
                            price={element.price}
                            photo={element.photo}
                            stock={element.stock}
                        />)}
                    </Grid>
                </Grid>
            </Grid>)
        }
    </>
}