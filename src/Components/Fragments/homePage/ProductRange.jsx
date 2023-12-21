import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import sneakers from '../../../assets/Images/nikeairforce.jpg';
import yeezy from '../../../assets/images/slidesbrown.jpg';
const boots =
    'https://thecrosstrainer.co.za/cdn/shop/products/nike-manoa-leather-boots--gradeschool-39032337563893.jpg?v=1681173857&width=1445';
const ProductContainer = () => {
    return (
        <div className='ml-4 w-full my-12'>
            <div className='flex items-center justify-center'>
                <h2 className='font-semibold font-mono text-lg'>OUR PRODUCT RANGE</h2>
            </div>
            <div className='flex flex-wrap justify-center mx-auto  w-[80%] '>
                <ProductCard
                    Title='Sneakers'
                    img={sneakers}
                    Description='Stylish footwear that are trendy and looks cool'
                />
                <ProductCard
                    Title='Yeezy'
                    img={yeezy}
                    Description='Comfy footwear for daily use at home'
                />
                <ProductCard
                    Title='Boots'
                    img={boots}
                    Description='Boots for rough train or whatever you want to where it for'
                />
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button className='border-2 p-2 font-semibold hover:border-cyan-400 hover:text-cyan-400 shadow-md'>
                    <Link to={'/collection'}>See More</Link>
                </button>
            </div>
        </div>
    );
};

export default ProductContainer;
