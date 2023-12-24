const BrandFlag = ({ img, title }) => {
    return (
        <div className='bg-white border-gray-500 h-[150px] p-1 w-[20%] grid place-items-center border-solid m-1'>
            <img src={`${img}`} alt='image' className='object-contain  w-full h-full   ' />
        </div>
    );
};

export default BrandFlag;
