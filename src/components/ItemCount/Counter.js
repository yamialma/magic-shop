import React,{useState} from 'react';
import './ItemCountStyle.css';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(5),
          padding: theme.spacing(3),
        },
      },
}));



const Counter = () => {
    const classes = useStyles();
    const [cantidad, setCantidad] = useState(1);

    return <div className={classes.root}>
        <Paper elevation={2} className="Paper">
            <h2>Cantidad</h2>
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                <Button onClick={e => {setCantidad(cantidad + 1)}} disabled={cantidad>=20}><AddCircleOutlinedIcon className="botonMasYmenos"/></Button>
                <h3 className="Cantidad">{cantidad}</h3>
                <Button onClick={e => {setCantidad(cantidad - 1)}} disabled={cantidad<=0}><RemoveCircleOutlinedIcon className="botonMasYmenos"/></Button>
            </ButtonGroup>
            <h4>Stock ({20 - cantidad} disponibles) </h4>
            <Button variant="contained" className="botonAgregar">Agregar</Button>
        </Paper>
    </div>
}

export default Counter;
