import useStyles from './styles';
import { Typography, Grid } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const CartItem = ({ product, quantity }) => {
    const classes = useStyles();

    return (
        <div className={classes.cartItem}>
            <Grid container spaceing={2}>
                <Grid item xs={10}>
                    <Typography variant="h3" className={classes.title}>
                        {product.title}
                    </Typography>
                </Grid>
                <img className={classes.img} src={product.image} alt={product.title}></img>
                <div className={classes.chip}>{parseInt(product.price) * quantity} kr </div>
            </Grid>
            <Grid item xs={2}>
                <ControlButtons product={product} quantity={quantity} />
            </Grid>
        </div>
    );
};

export default CartItem