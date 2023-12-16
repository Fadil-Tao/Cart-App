import Card from '../collection/Card';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { add } from '../../../store/cartSlice';
const SimilarProducts = ({ category }) => {
    const products = useSelector((state) => state.product);
    const [product, setProduct] = useState(products);
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar()



    useEffect(() => {
        const filteredProduct = product.filter((item) => 
          item.category.toLowerCase().includes(category.toLowerCase()) 
        );
        setProduct(filteredProduct);
        console.log(filteredProduct)
    }, []);
    const addToCart = (event, item) => {
        dispatch(add(item));
        console.log('clikced');
        enqueueSnackbar(`Item added to your cart successfully`, {
            variant: "success",
            autoHideDuration: 3000,
          });
    };
    return (
        <div className='mt-20 '>
            <p className='text-center'>Similiar Products</p>
            <ul className='lg:flex grid grid-cols-1 lg:flex-wrap lg:px-44  justify-center items-center'>
                {product.map((data, index) => {
                    return (
                        <li key={index} className='mx-3'>
                            <Card
                                img={`${data.image}`}
                                name={`${data.name}`}
                                brand={`${data.brand}`}
                                price={`${data.price}`}
                                category={`${data.category}`}
                                link={``}
                                action={(event) => addToCart(event, data)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SimilarProducts;
