import { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { CatContext } from '../../../Pages/CollectionPage';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/cartSlice';
import { useSelector } from 'react-redux';
import SearchBar from '../Nav/SearchBar';
import { useSnackbar } from 'notistack';

const CardContainer = () => {
    const products = useSelector((state) => state.product);
    const [product, setProduct] = useState(products);
    const category = useContext(CatContext);
    const [searchVal, setSearchVal] = useState('');
    const dispatch = useDispatch();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    useEffect(() => {
        if (category.category === 'ALL') {
            setProduct(products);
            return;
        } else {
            const filteredProducts = products.filter((data) => data.category === category.category);
            setProduct(filteredProducts);
        }

        console.log(category.category);
        console.log('Category changed:', category);
    }, [category, products]);

    const addToCart = (event, item) => {
        dispatch(add(item));
        console.log('clikced');
        enqueueSnackbar(`Item added to your cart successfully`, {
            variant: "success",
            autoHideDuration: 3000,
          });
    };

    const handleChange = (e) => {
        if (searchVal === '') {
            setProduct(products);
        }
        setSearchVal(e.target.value);
    };

    const handleSearch = () => {
        if (searchVal === '') {
            setProduct(products);
            return;
        }
        const filteredProducts = product.filter((item) => {
            return item.name.toLowerCase().includes(searchVal.toLowerCase());
        })
        console.log(filteredProducts)
        setProduct(filteredProducts)  
    };

    return (
        <div className='w-full'>
            <div className='lg:w-[330px] lg:flex lg:justify-start lg:ml-12 h-10 md:px-2  px-14 lg:h-10'>
                {' '}
                <SearchBar onChange={(e) => handleChange(e)} Click={handleSearch} />
            </div>
            <div className='lg:mb-80 flex flex-wrap justify-center items-center w-full    h-full '>
                <ul className='grid  gap-x-2 lg:grid-cols-3'>
                    {product.map((data, index) => {
                        return (
                            <li key={index}>
                                <Card
                                    img={`${data.image}`}
                                    name={`${data.name}`}
                                    brand={`${data.brand}`}
                                    price={`${data.price}`}
                                    category={`${data.category}`}
                                    link = {`${index}`}
                                    action={(event) => addToCart(event, data)}
                                    state={product[index]}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default CardContainer;
