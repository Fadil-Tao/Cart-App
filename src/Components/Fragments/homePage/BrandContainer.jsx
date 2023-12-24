import BrandFlag from './BrandFlag';

const BrandContainer = () => {
    return (
        <div className='w-full mb-12 mt-12 justify-center items-center flex flex-col   p-2'>
            <h2 className='flex mx-auto justify-center text-center'>WE PROVIDED FOOTWEAR FROM THESE BRANDS</h2>
            <div className='   flex justify-center flex-wrap  w-[80%] '>
                <BrandFlag img='https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg' />
                <BrandFlag img='https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg' />
                <BrandFlag img='https://logowik.com/content/uploads/images/vans9140.jpg' />
                <BrandFlag img='https://logowik.com/content/uploads/images/converse-new1270.jpg' />
            </div>
        </div>
    );
};

export default BrandContainer;
