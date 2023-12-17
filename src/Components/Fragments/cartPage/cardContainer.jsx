import CartCard from './cartCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove, increase, decrease} from '../../../store/cartSlice';
import { enqueueSnackbar , useSnackbar} from 'notistack';
const CartCardContainer = () => {
    const productCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleDelete = (event, id) => {
        dispatch(remove(id));
        enqueueSnackbar(`Item removed from your cart!`, {
            variant: "warning",
            autoHideDuration: 3000,
          });
    };
    const handleIncrease= (e, index) => {
        dispatch(increase(index))
    }  
    const handleDecrease= (e, index) => {
        dispatch(decrease(index))
    }  
    return (
        <div>
            <h1 className='flex justify-center items-center'>Your Order</h1>
            <div className='grid grid-cols-1'>
                <ul>
                    {productCart.map((data, index) => {
                        return (
                            <li key={index}>
                                <CartCard
                                    name={`${data.name}`}
                                    image={`${data.image}`}
                                    price={`${data.price}`}
                                    qty={data.qty}
                                    action={(event) => handleDelete(event, index) }
                                    increase={(e)=> handleIncrease(e,index)}
                                    decrease={(e)=> handleDecrease(e,index)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default CartCardContainer;
