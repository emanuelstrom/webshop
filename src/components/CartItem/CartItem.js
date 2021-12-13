import useStyles from './styles';
import { Typography, Grid } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const CartItem = ({ product, quantity }) => {
    const classes = useStyles();

    return (
        <div className={classes.cartItem}>
            <Grid container spaceing={2}>
                <Grid item xs={12}>
                    <Typography variant="h3" className={classes.title}>
                        {product.title}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <img className={classes.img} src={product.image} alt={product.title}></img>
                </Grid>
                <Grid item xs={10} >
                    <div className={classes.totalAmmount}>
                        <div className={classes.chipContainer}>
                            <div className={classes.chip}>{parseInt(product.price) * quantity} kr </div>
                        </div>
                        <ControlButtons product={product} quantity={quantity} />
                        
                    </div>
                </Grid>
                <Grid item xs={10}>
                </Grid>
            </Grid>
        </div>
    );
};

export default CartItem