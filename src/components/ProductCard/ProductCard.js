import { Typography, IconButton, Divider, Skeleton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useStyles from './styles'

const ProductCard = ({ loading, title, price, image, id, description, category, raiting }) => {

    const classes = useStyles();
    

    return (
        <div className={classes.productCard}>
            <div className={classes.productCardFlex}>
                <div className={classes.informationContainer}>
                    <div className={classes.info}>
                        <img className={classes.img} src={image} alt={title} />
                        <div className={classes.details}>
                            <Typography variant="subtitle2">
                                <p classname={`${classes.title} ${classes.detailMargin}`}>
                                    {title}
                                </p>
                            </Typography>
                            <p className={classes.detailMargin}>{price} kr</p>
                        </div>
                    </div>
                </div>

                <div className={classes.buttons}>
                    <IconButton aria-label="plus" onClick={() => {}}>
                        <AddIcon fontSize="large" className={classes.button} />
                    </IconButton>
                    <IconButton aria-label="plus" onClick={() => {}}>
                        <RemoveIcon fontSize="large" className={classes.button} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;