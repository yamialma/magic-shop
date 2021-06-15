import React,{useState} from 'react';
import './ItemCountStyle.css';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(0),
          padding: theme.spacing(2),
        },
      },
}));



const Counter = () => {
    const classes = useStyles();

    const [cantidad, setCantidad] = useState(1);
    const Agregar = () => {
        setCantidad(cantidad + 1);
    } 
    const Quitar = () => {
        setCantidad(cantidad - 1);
    }


    return <div className={classes.root}>
            <h3>Cantidad</h3>
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
                <Button onClick={Agregar} disabled={cantidad>=20}><AddCircleOutlinedIcon className="botonMasYmenos"/></Button>
                <h3 className="Cantidad">{cantidad}</h3>
                <Button onClick={Quitar} disabled={cantidad<=0}><RemoveCircleOutlinedIcon className="botonMasYmenos"/></Button>
            </ButtonGroup>
            <Button variant="contained" className="botonAgregar">Agregar</Button>
    </div>
}

export default Counter;
