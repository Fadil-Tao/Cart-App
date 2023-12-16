
const MainCard = ({ img, price, brand, description, name, action }) => {
    return (
        <div className='lg:px-44 mt-10 justify-center items-center w-full lg:flex'>
            <div className='lg:w-[40%] flex justify-center items-center'>
                <div className='lg:h-[360px] h-[300px] lg:w-[300px] w-[250px] '>
                    <img
                        src={`${img}`}
                        alt='image'
                        className='w-full h-full rounded-md object-cover'
                    />
                </div>
            </div>
            <div className='p-2 mx-10 grid grid-cols-1 lg:w-[60%]'>
                <h1 className='font-bold text-lg font-serif text-center lg:text-start'>{`${name}`}</h1>
                <div className='lg:text-start text-center'>
                    <p>{`$ ${price}`}</p>
                    <p>{`${brand}`}</p>
                </div>
                <div className='w-full'>
                    <p className='lg:text-start text-center'>{`${description}`}</p>
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <button
                        className='border-2 border-black p-2 hover:text-white hover:bg-neutral-200 '
                        onClick={(event) => action(event)}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainCard;
