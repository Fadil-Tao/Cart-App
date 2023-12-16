import MainCard from '../Components/Fragments/ProductDetail/MainCard';
import SimilarProducts from '../Components/Fragments/ProductDetail/SimilarProduct';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { add } from '../store/cartSlice';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const [product] = useState(state.data);
    const { enqueueSnackbar } = useSnackbar();

    const addToCart = (event, item) => {
        dispatch(add(item));
        console.log('clikced');
        enqueueSnackbar(`Item added to your cart successfully`, {
            variant: 'success',
            autoHideDuration: 3000,
        });
    };

    return (
        <div>
            <MainCard
                img={product.image}
                name={product.name}
                description={product.description}
                brand={product.brand}
                price={product.price}
                action={(event) => addToCart(event, product)}
            />
            <SimilarProducts category={product.category}/>
        </div>
    );
};

export default ProductDetail;
