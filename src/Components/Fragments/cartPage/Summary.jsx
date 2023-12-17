import {useSelector} from 'react-redux';

const CartSummary = (props) => {
    const cartProducts = useSelector((state) => state.cart);

    const { price, items } = props;
    return (
        <div className='flex justify-center items-center border-2'>
            <div className='shadow-md place-content-center grid px-4 py-24 grid-cols-1'>
                <p className='text-center'>Order Summary</p>

                <div className='grid grid-cols-2 justify-between mx-12 my-6 gap-x-36'>
                    <p>Total Belanja</p>
                    <p>{cartProducts.reduce((n, { qty }) => n + qty, 0)}</p>
                    <p>Total Money</p>
                    <p>$ {cartProducts.reduce((n, { qty, price }) => n + price * qty, 0)}</p>
                </div>
                <div className='flex items-center justify-center'>
                    <button className=' bg-cyan-600 rounded-lg p-2'>Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
