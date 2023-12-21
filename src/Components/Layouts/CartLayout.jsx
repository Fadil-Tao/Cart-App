import CartSummary from '../Fragments/cartPage/Summary';
import CartCardContainer from '../Fragments/cartPage/cardContainer';
import { SnackbarProvider } from 'notistack';
const CartLayout = () => {
    return (
        <div className='my-20'>
            <div className='flex-col lg:grid lg:grid-cols-2 items-center justify-start  lg:px-44'>
                <SnackbarProvider>
                    <CartCardContainer />
                </SnackbarProvider>
                <CartSummary />
            </div>
        </div>
    );
};

export default CartLayout;
